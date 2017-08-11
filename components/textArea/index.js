export const TextArea = ({ text, updateText }) => (
	<div class="text-area">
		<textarea class="text-area__text" onChange={updateText}>
			{text}
		</textarea>

	</div>
);