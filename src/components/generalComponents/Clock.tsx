import {
	integerToTimeArray,
	modifyTime,
	checkIfSingleDigit,
	timerFinished,
} from '../timer/TimerLogic';
import { useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import GeneralButton from './GeneralButton';

interface clockProps {
	timerValue: number;
	setTimerValue: any;
	whenTimerRunning: () => void;
	isTimerRunning: boolean;
	setIsTimerRunning: any;
	isCronometer?: boolean;
	displayButtons?: boolean;
	[key: string]: any;
}

const Clock = ({
	timerValue,
	setTimerValue,
	whenTimerRunning,
	isTimerRunning,
	setIsTimerRunning,
	isCronometer = false,
	displayButtons = false,
}: clockProps) => {
	useEffect(() => {
		let intervalId: any;

		if (!isCronometer && isTimerRunning && timerValue == 0) {
			setIsTimerRunning(false);
			timerFinished();
		}

		if (isTimerRunning) {
			intervalId = setInterval(whenTimerRunning, 1000);
		}

		return () => {
			clearInterval(intervalId);
		};
	}, [isTimerRunning, timerValue]);

	const renderButtons = (i: number, task: string) => {
		return (
			<section>
				<GeneralButton
					disabled={isTimerRunning ? true : false}
					onClickFunction={() =>
						modifyTime(i, 'left', task, timerValue, setTimerValue)
					}
					text={<IoIosArrowUp />}
				/>
				<GeneralButton
					disabled={isTimerRunning ? true : false}
					onClickFunction={() =>
						modifyTime(i, 'right', task, timerValue, setTimerValue)
					}
					text={<IoIosArrowUp />}
				/>
			</section>
		);
	};

	return (
		<section className="timer_container">
			{integerToTimeArray(timerValue).map((item, i) => {
				return (
					<div className="flex" key={i}>
						<aside>
							{displayButtons ? renderButtons(i, 'add') : <></>}

							{checkIfSingleDigit(item) ? `0${item}` : `${item}`}

							{displayButtons ? renderButtons(i, 'take') : <></>}
						</aside>
						{i === 0 ? <aside>:</aside> : <></>}
					</div>
				);
			})}
		</section>
	);
};

export default Clock;
