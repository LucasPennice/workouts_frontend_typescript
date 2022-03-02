export const determineUserTier = (level: number) => {
	if (level == 1) return 'pink';
	if (level == 2) return '#4cb944';
	if (level == 3) return '#4d6cfa';
	if (level == 4) return '#a42cd6';
	if (level == 5) return '#ff9f1c';
	if (level > 5) return '#f53838';
};

export const changeArrayIndex = (
	arr: any[],
	index: number,
	indexModifier: any,
	action: number
) => {
	if (index + action >= 0 && index + action < arr.length)
		indexModifier(index + action);
};
