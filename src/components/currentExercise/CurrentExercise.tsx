import { useState, useEffect } from 'react';
interface exercise {
	exerciseName: string;
	sets: number;
	reps: number;
	weight: number;
}

interface currentExerciseProps {
	displayingExercise: exercise;
	[key: string]: any;
}

const CurrentExercise = ({
	displayingExercise,
	currentTheme,
}: currentExerciseProps) => {
	const createSetsArray = () => {
		return [1, 1, 1, 0];
	};
	const { exerciseName, sets, reps, weight } = displayingExercise;
	const { textColor, shadowColor } = currentTheme;
	const [currentWeight, setCurrentWeight] = useState(0);
	const [setsArray, setSetsArray] = useState(createSetsArray());

	useEffect(() => {
		let id: any;
		if (currentWeight != weight) {
			id = setInterval(() => {
				setCurrentWeight(currentWeight + 2);
			}, 30);
		}

		return () => {
			clearInterval(id);
		};
	}, [currentWeight]);

	const renderSetIndicators = () => {
		return setsArray.map((item, index) => {
			return (
				<div
					key={index}
					className={`set ${item === 1 ? 'setCompleted' : ''}`}
					style={{ border: `3px ${textColor} solid` }}
				></div>
			);
		});
	};

	return (
		<div className="currentExercise_container">
			<div className="weightDisplay">{currentWeight}</div>
			<div className="exerciseInfo">
				<h1
					className="exercise_title"
					style={{ textShadow: `0px 0px 2px ${shadowColor}` }}
				>
					{exerciseName}
				</h1>
				<section className="sets_container">{renderSetIndicators()}</section>
				<h1 style={{ textShadow: `0px 0px 2px ${shadowColor}` }}>
					Sets of {reps} reps
				</h1>
			</div>
		</div>
	);
};

export default CurrentExercise;
