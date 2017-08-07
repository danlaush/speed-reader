export const Slider = ({ onChange, speed }) => (
	<div class="slider">
		<input 
			id="speed"
			class="slider__control"
			type="range"
			min="-700" 
			max="700" 
			onInput={onChange} 
			value={speed} 
			/>
	</div>
);