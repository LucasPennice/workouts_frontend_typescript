import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState, useEffect } from 'react';
import {
	checkIfSingleDigit,
	validateTimingOperation,
	integerToTimeArray,
	determineValueOfOperation,
} from './TimerLogic';

type propType = {
	timerValue: number;
	setTimerValue: React.Dispatch<React.SetStateAction<number>>;
};

const Timer = ({ timerValue, setTimerValue }: propType) => {
	const [isTimerRunning, setIsTimerRunning] = useState(false);

	const whenTimerRunning = () => {
		setTimerValue(timerValue - 1);
	};

	const timerFinished = () => {
		alert('ding');
	};

	const resetTimer = () => {
		setIsTimerRunning(false);
		setTimerValue(0);
	};

	useEffect(() => {
		let intervalId: any;
		if (isTimerRunning && timerValue != 0) {
			intervalId = setInterval(whenTimerRunning, 1000);
		}
		if (isTimerRunning && timerValue == 0) {
			setIsTimerRunning(false);
			timerFinished();
		}
		return () => {
			clearInterval(intervalId);
		};
	}, [isTimerRunning, timerValue]);

	const modifyTime = (i: number, position: string, action: string) => {
		let value = determineValueOfOperation(i, position);
		if (action === 'take') value! *= -1;
		if (validateTimingOperation(value!, timerValue)) {
			setTimerValue(timerValue + value!);
		} else {
			console.error('Tried to make time negative or too high');
		}
	};

	const renderTimer = () => {
		return integerToTimeArray(timerValue).map((item, i) => {
			return (
				<div className="flex" key={i}>
					<aside>
						<section>
							<button onClick={() => modifyTime(i, 'left', 'add')}>
								<IoIosArrowUp />
							</button>
							<button onClick={() => modifyTime(i, 'right', 'add')}>
								<IoIosArrowUp />
							</button>
						</section>

						{checkIfSingleDigit(item) ? `0${item}` : `${item}`}
						<section>
							<button onClick={() => modifyTime(i, 'left', 'take')}>
								<IoIosArrowDown />
							</button>
							<button onClick={() => modifyTime(i, 'right', 'take')}>
								<IoIosArrowDown />
							</button>
						</section>
					</aside>
					{i === 0 ? <aside>:</aside> : <></>}
				</div>
			);
		});
	};

	return (
		<div className="content_container">
			<h1>TIMER</h1>
			<section className="timer_container">{renderTimer()}</section>

			<div className="buttons_container">
				<button onClick={resetTimer}>Reset</button>
				<button
					onClick={() => {
						if (timerValue != 0) setIsTimerRunning(!isTimerRunning);
					}}
				>
					{isTimerRunning ? 'Pause timer' : 'Start Timer'}
				</button>
			</div>
		</div>
	);
};
export default Timer;
