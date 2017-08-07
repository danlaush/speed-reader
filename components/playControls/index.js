export const PlayControls = ({ onChange, speed, reset }) => (
	<div class="play-controls">
		<button onClick={onChange} value="0">Stop</button>
		<button onClick={reset} >Reset</button><br />
		{speed} WPM
	</div>
);