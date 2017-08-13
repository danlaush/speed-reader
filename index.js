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
		text: "BEIJING — In a diplomatic gamble, President Trump is seeking to enlist China as a peacemaker in the bristling nuclear-edged dispute with North Korea at the very moment he plans to ratchet up conflict with Beijing over trade issues that have animated his political rise. Mr. Trump spoke late Friday with his counterpart, President Xi Jinping of China, to press the Chinese to do more to rein in North Korea as it races toward development of long-range nuclear weapons that could reach the United States. Mr. Xi sought to lower the temperature after Mr. Trump’s vow to rain down “fire and fury” on North Korea, urging restraint and a political solution. But the conversation came as Mr. Trump’s administration was preparing new trade action against China that could inflame the relationship. Mr. Trump plans to return to Washington on Monday to sign a memo determining whether China should be investigated for intellectual property violations, accusing Beijing of failing to curb the theft of trade secrets and rampant online and physical piracy and counterfeiting. An investigation would be intended to lead to retaliatory measures. The White House had planned to take action on intellectual property earlier but held off as it successfully lobbied China to vote at the United Nations Security Council for additional sanctions on North Korea a week ago. Even now, the extra step of determining whether to start the investigation is less than trade hawks might have wanted, but softens the blow to China and gives Mr. Trump a cudgel to hold over it if he does not get the cooperation he wants. While past presidents have tried at least ostensibly to keep security and economic issues on separate tracks in their dealings with China, Mr. Trump has explicitly linked the two, suggesting he would back off from a trade war against Beijing if it does more to pressure North Korea. “If China helps us, I feel a lot differently toward trade, a lot differently toward trade,” he told reporters on Thursday.",
		textNodes: [],
		activeNode: 0,
		speed: 0,
		percentComplete: 0
	};

	constructor() {
		super();
		this.timer;
		this.changeSpeed = throttle(this.changeSpeed.bind(this),100);
		this.stop = this.stop.bind(this);
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
		if(oldSpeed == 0) {
			clearTimeout(this.timer);
			this.updateWord();
		}
	}

	updateWord() {
		this.timer = setTimeout(() => {
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
			textNodes: this.state.text.split(/[-\n\s]+/).filter(Boolean)
		});
	}

	stop() {
		this.setState({ 
			speed: 0
		});
		clearTimeout(this.timer);
	}

	reset() {
		this.setState({ 
			activeNode: 0,
			percentComplete: 0
		});
		clearTimeout(this.timer);
	}

	render(props) {
		return (
			<div>
				<Header />
				<main class="main">
					<ProgressBar 
						percentComplete={this.state.percentComplete} 
					/>
					<Word 
						word={this.state.textNodes[this.state.activeNode]} 
					/>
					<Slider 
						speed={this.state.speed} 
						onChange={this.changeSpeed}
					/>
					<PlayControls 
						speed={this.state.speed} 
						stop={this.stop}
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

// Thanks Remy Sharp
function throttle(fn, threshhold, scope) {
	threshhold || (threshhold = 250);
	var last,
		deferTimer;
	return function () {
		var context = scope || this;

		var now = +new Date,
		args = arguments;
		if (last && now < last + threshhold) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshhold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}