export const PlayControls = ({ start, stop, speed, reset }) => (
	<div class="play-controls">
		<button onClick={start}>Start</button>
		<button onClick={stop}>Stop</button>
		<button onClick={reset} >Reset</button><br />
		{speed} WPM
	</div>
);