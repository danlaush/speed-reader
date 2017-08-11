import './style';
import { Component } from 'preact';
import { Header } from './components/header';
import { Slider } from './components/slider';
import { Word } from './components/word';
import { PlayControls } from './components/playControls';
import { ProgressBar } from './components/progressBar';
import { TextArea } from './components/textArea';

export default class App extends Component {
	state = {
		text: "A Town Mouse once visited a relative who lived in the country. For lunch the Country Mouse served wheat stalks, roots, and acorns, with a dash of cold water for drink. The Town Mouse ate very sparingly, nibbling a little of this and a little of that, and by her manner making it very plain that she ate the simple food only to be polite.",
		textNodes: [],
		activeNode: 0,
		speed: 0,
		percentComplete: 0
	};

	constructor() {
		super();
		this.changeSpeed = this.changeSpeed.bind(this);
		this.reset = this.reset.bind(this);
		this.updateText = this.updateText.bind(this);
	}

	componentDidMount() {
		this.setState({
			textNodes: this.state.text.split(/[ ]+/).filter(Boolean)
		});
	}

	changeSpeed(event) {
		let value = event.target.value,
			oldSpeed = this.state.speed;
		this.setState({speed:value});
		if(oldSpeed == 0) this.updateWord();
	}

	updateWord() {
		setTimeout(() => {
			if(this.state.speed<0) {
				if (this.state.activeNode-1 >= 0)
	            	this.setState({ activeNode: this.state.activeNode-1 });
			} else {
				if (this.state.activeNode+1 < this.state.textNodes.length)
	            	this.setState({ activeNode: this.state.activeNode+1 });
			}
			this.setState({ percentComplete: Math.round(this.state.activeNode / this.state.textNodes.length * 100) })
			if(this.state.speed != 0)
				this.updateWord();
		}, (60/Math.abs(this.state.speed))*1000);
	}

	updateText(event) {
		this.reset();
		this.setState({text: event.target.value});
		this.setState({
			textNodes: this.state.text.split(/[ ]+/).filter(Boolean)
		});
	}

	reset() {
		this.setState({ 
			activeNode: 0,
			percentComplete: 0
		});
	}

	render(props) {
		return (
			<div>
				<Header />
				<main class="main">
					<ProgressBar percentComplete={this.state.percentComplete} />
					<Word word={this.state.textNodes[this.state.activeNode]} />
					<Slider 
						speed={this.state.speed} 
						onChange={this.changeSpeed}
						/>
					<PlayControls 
						speed={this.state.speed} 
						onChange={this.changeSpeed}
						reset={this.reset}
						/>
					<TextArea
						text={this.state.text}
						updateText={this.updateText}
						/>
				</main>
			</div>
		);
	}
}
