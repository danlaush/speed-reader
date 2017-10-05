export const TextArea = ({ text, updateText, title }) => (
	<div class="text-area">
		<h2 class="text-area__title">{title}</h2>
		<textarea class="text-area__text" onInput={updateText}>
			{text}
		</textarea>

	</div>
);