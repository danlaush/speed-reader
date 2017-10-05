import { Component } from 'preact';

export default class Header extends Component {
    constructor(props) {
        super();
        this.state.showHelp = false;
		this.toggleHelp = this.toggleHelp.bind(this);
        this.state.showUrl = false;
		this.toggleUrl = this.toggleUrl.bind(this);
		this.loadUrl = props.loadUrl;
		// console.log('this',this);
		this.getUrl = this.getUrl.bind(this);
    }

    toggleHelp() {
    	this.setState({ showHelp: !this.state.showHelp })
    } 

    toggleUrl() {
    	this.setState({ showUrl: !this.state.showUrl })
    } 

    getUrl() {
    	this.loadUrl(this.state.url);
    	this.toggleUrl();
    }

    render(props, state) {
        return (
        	<div class="header__wrap">
        		<div class="header">
					<h1 class="title">Speed Reading</h1>
					<button onClick={this.toggleUrl} class="url__toggle">🌍</button>
					<button onClick={this.toggleHelp} class="help__toggle">❓</button>
					<div class={'url__window ' + (this.state.showUrl ? 'url__window--visible' : 'url__window--hidden')}>
						<h2>Load a web page</h2>
						<input type="text" onChange={ e => this.setState({url: e.target.value})} />
						<button onClick={this.getUrl}>Load URL</button>
						<p>Currently supported:</p>
						<ul>
							<li><a href="https://www.wired.com/">Wired Magazine</a></li>
							<li><a href="https://www.bbc.co.uk/news">BBC News</a></li>
							<li><a href="https://www.medium.com/">Medium</a></li>
						</ul>
					</div>
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
