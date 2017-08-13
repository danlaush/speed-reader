export const PlayControls = ({ stop, speed, reset }) => (
	<div class="play-controls">
		<button onClick={stop} value="0">Stop</button>
		<button onClick={reset} >Reset</button><br />
		{speed} WPM
	</div>
);