import './style';
import { Component } from 'preact';
import { Header } from './components/header';
import { Slider } from './components/slider';
import { Word } from './components/word';

export default class App extends Component {
	state = {
		text: "A Town Mouse once visited a relative who lived in the country. For lunch the Country Mouse served wheat stalks, roots, and acorns, with a dash of cold water for drink. The Town Mouse ate very sparingly, nibbling a little of this and a little of that, and by her manner making it very plain that she ate the simple food only to be polite.",
		textNodes: [],
		activeNode: 0,
		speed: 60
	};

	constructor() {
		super();
		this.changeSpeed = this.changeSpeed.bind(this);
	}

	componentDidMount() {
		this.setState({
			textNodes: this.state.text.split(/[ ]+/).filter(Boolean)
		});
		this.updateWord();
	}

	changeSpeed(event) {
		let value = event.target.value;
		this.setState({speed:value});
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
			if(this.state.speed != 0)
				this.updateWord();
		}, (60/Math.abs(this.state.speed))*1000);
	}

	nextWord() {
		let newNode = (this.state.activeNode+1 > this.state.textNodes.length-1) ? 0 : this.state.activeNode+1;
		this.setState({activeNode: newNode});
	}

	render(props, { results=[] }) {
		return (
			<div>
				<Header />
				<Word word={this.state.textNodes[this.state.activeNode]} />
				<Slider 
					speed={this.state.speed} 
					onChange={this.changeSpeed}
					/>
				<button onclick={this.nextWord.bind(this)}>Next word</button>
			</div>
		);
	}
}
