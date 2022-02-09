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
