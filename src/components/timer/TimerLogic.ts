export const checkIfSingleDigit = (int: number) => {
	return int <= 9;
};
export const validateTimingOperation = (value: number, timerValue: number) => {
	if (timerValue + value < 0) return false;
	if (timerValue + value > 5999) return false;
	return true;
};

export const integerToTimeArray = (integer: number) => {
	const result = [];
	result[0] = ~~(integer / 60);
	result[1] = integer - result[0] * 60;
	return result;
};

export const determineValueOfOperation = (i: number, position: string) => {
	if (i === 0) {
		return position === 'left' ? 600 : 60;
	}
	if (i === 1) {
		return position === 'left' ? 10 : 1;
	}
};

export const resetTimer = (setTimerStatus: any, setTimerValue: any) => {
	setTimerStatus(false);
	setTimerValue(0);
};
export const timerFinished = () => {
	alert('ding');
};

export const modifyTime = (
	i: number,
	position: string,
	action: string,
	timerValue: number,
	setTimerValue: any
) => {
	let value = determineValueOfOperation(i, position);
	if (action === 'take') value! *= -1;
	if (validateTimingOperation(value!, timerValue)) {
		setTimerValue(timerValue + value!);
	} else {
		console.error('Tried to make time negative or too high');
	}
};
