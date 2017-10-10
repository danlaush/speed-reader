export const ProgressBar = ({ percentComplete }) => (
	<div class="progress-bar">
		<div class="progress-bar__bar">
			<div 
				class="progress-bar__current" 
				style={`transform:scaleX(${percentComplete/100})`}>
					<span>{percentComplete}% Complete</span>
			</div>
		</div>
		<div class="progress-bar__drag"></div>
	</div>
);