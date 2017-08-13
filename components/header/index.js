import { Component } from 'preact';

export default class Header extends Component {
    constructor() {
        super();
        this.state.showHelp = false;
		this.toggleHelp = this.toggleHelp.bind(this);
    }

    toggleHelp() {
    	this.setState({ showHelp: !this.state.showHelp })
    } 

    render(props, state) {
        return (
        	<div class="header__wrap">
        		<div class="header">
					<h1 class="title">Speed Reading</h1>
					<button onClick={this.toggleHelp} class="help__toggle">?</button>
					<div class={'help__window ' + (this.state.showHelp ? 'help__window--visible' : 'help__window--hidden')}>
						<h2>What's this?</h2>
						<p><strong>This is an app to help you read text quickly.</strong> You can read much faster when you only see one word at a time. This removes the need to scan lines of text.</p>
						<h3>Using the app</h3>
						<p>Copy and paste some an article you find on the web into the text box. Use the slider in the middle of the screen to adjust the speed at which words are shown to you. You can use the slider to go backwards if you missed something!</p>
						<p><strong>KNOWN BUG:</strong> Dragging the slider from the starting position can cause the words to not progress. Start by clicking/tapping somewhere else along the slider, and then drag the slider from there to adjust.</p>
						<h3>What's coming up?</h3>
						<p>This is a work in progress and is currently in the prototype phase. Potential extensions:</p>
						<ul>
							<li>Share a URL to the app - great for mobile</li>
							<li>Make a browser extension - one-click speed reading!</li>
							<li>Make the progress bar interactive - drag it back and forth like a video</li>
						</ul>
					</div>
				</div>
			</div>
		);
    }
}
