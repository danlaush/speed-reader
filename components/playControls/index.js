export const PlayControls = ({ start, pause, speed, reset, startState }) => (
	<div class="play-controls">
    {startState == true ?
      <button onClick={pause}>Pause</button>
    :
      <button onClick={start}>Start</button>
    }
		<button onClick={reset} >Reset</button><br />
		{speed} WPM
	</div>
);