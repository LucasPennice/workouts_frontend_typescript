import { useState } from 'react';
import Clock from '../generalComponents/Clock';
import { resetTimer } from '../timer/TimerLogic';
import GeneralButton from '../generalComponents/GeneralButton';

interface cronometerProps {
	cronometerValue: number;
	setCronometerValue: React.Dispatch<React.SetStateAction<number>>;
	[key: string]: any;
}

const Cronometer = ({
	cronometerValue,
	setCronometerValue,
}: cronometerProps) => {
	const [isCronometerRunning, setIsCronometerRunning] = useState(false);

	const whenTimerRunning = () => {
		setCronometerValue(cronometerValue + 1);
	};

	const startCronometer = () => {
		if (cronometerValue >= 0) setIsCronometerRunning(!isCronometerRunning);
	};
	return (
		<div className="content_container">
			<h1>CRONOMETER</h1>
			<Clock
				timerValue={cronometerValue}
				setTimerValue={setCronometerValue}
				whenTimerRunning={whenTimerRunning}
				isTimerRunning={isCronometerRunning}
				setIsTimerRunning={setIsCronometerRunning}
				displayButtons={false}
				isCronometer={true}
			/>
			<div className="buttons_container">
				<GeneralButton
					text="Reset"
					onClickFunction={() =>
						resetTimer(setIsCronometerRunning, setCronometerValue)
					}
				/>
				<GeneralButton
					text={isCronometerRunning ? 'Pause timer' : 'Start Timer'}
					onClickFunction={startCronometer}
				/>
			</div>
		</div>
	);
};
export default Cronometer;
