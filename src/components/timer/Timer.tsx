import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState, useEffect } from 'react';
const Timer = () => {
	const [isTimerRunning, setIsTimerRunning] = useState(false);
	const [timerArray, setTimerArray] = useState([0, 0, 0, 0]);
	//Agarrar la cantidad de segundos totales y despues descomponer en la porqueria, va a ser mas facil
	const checkIfTaskValid = () => {
		return true;
	};
	const modify = (i: number, task: string) => {
		if (checkIfTaskValid()) {
			const arr = [...timerArray];
			if (task == 'add') arr[i]++;
			if (task == 'take') arr[i]--;
			setTimerArray([...arr]);
		}
	};

	const renderTimer = () => {
		return timerArray.map((item, index) => {
			return (
				<>
					<aside>
						<button onClick={() => modify(index, 'add')}>
							<IoIosArrowUp />
						</button>
						{item}
						<button onClick={() => modify(index, 'take')}>
							<IoIosArrowDown />
						</button>
					</aside>
					{index === 1 ? <aside>:</aside> : <></>}
				</>
			);
		});
	};
	return (
		<div className="content_container">
			<h1>TIMER</h1>
			<section className="timer_container">{renderTimer()}</section>

			<div className="buttons_container">
				<button>Start Timer</button>
			</div>
		</div>
	);
};
export default Timer;
