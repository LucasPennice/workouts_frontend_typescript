import { useState } from 'react';
import { resetTimer } from './TimerLogic';
import Clock from '../generalComponents/Clock';
import GeneralButton from '../generalComponents/GeneralButton';

type propType = {
	timerValue: number;
	setTimerValue: React.Dispatch<React.SetStateAction<number>>;
};

const Timer = ({ timerValue, setTimerValue }: propType) => {
	const [isTimerRunning, setIsTimerRunning] = useState(false);
	const whenTimerRunning = () => {
		setTimerValue(timerValue - 1);
	};

	const startTimer = () => {
		if (timerValue != 0) setIsTimerRunning(!isTimerRunning);
	};

	return (
		<div className="content_container">
			<h1>TIMER</h1>

			<Clock
				timerValue={timerValue}
				setTimerValue={setTimerValue}
				whenTimerRunning={whenTimerRunning}
				isTimerRunning={isTimerRunning}
				setIsTimerRunning={setIsTimerRunning}
				displayButtons={true}
			/>

			<div className="buttons_container">
				<GeneralButton
					text="Reset"
					onClickFunction={() => resetTimer(setIsTimerRunning, setTimerValue)}
				/>
				<GeneralButton
					text={isTimerRunning ? 'Pause timer' : 'Start Timer'}
					onClickFunction={startTimer}
				/>
			</div>
		</div>
	);
};
export default Timer;
