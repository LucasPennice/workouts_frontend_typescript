import { GiAlarmClock } from 'react-icons/gi';
import IconButton from '../IconButton';
import React from 'react';
import userData from '../../mockData.json';
import CurrentExercise from '../currentExercise/CurrentExercise';
import GeneralButton from '../generalComponents/GeneralButton';
import { changeArrayIndex } from '../../functions/generalFunctions';
interface AppProps {
	theme: string;
	currentTheme: any;
	currentExerciseIndex: number;
	setCurrentExerciseIndex: React.Dispatch<React.SetStateAction<number>>;
}
const colorModeIcons = {
	light: <GiAlarmClock />,
	dark: <GiAlarmClock />,
};
const MyRoutines = ({
	theme,
	currentTheme,
	currentExerciseIndex,
	setCurrentExerciseIndex,
}: AppProps) => {
	const { workouts } = userData;
	const currentWorkout = workouts[0]['exercises'];
	const currentExercise = currentWorkout[currentExerciseIndex];
	return (
		<div className="content_container">
			<IconButton
				onClickProp={() => {}}
				theme={theme}
				icons={colorModeIcons}
				currentTheme={currentTheme}
				extraClass="myWorkouts_clockIcon"
			/>
			<CurrentExercise
				displayingExercise={currentExercise}
				currentTheme={currentTheme}
			/>
			<div className="buttons_container">
				<GeneralButton
					text={'+1'}
					onClickFunction={() =>
						changeArrayIndex(
							currentWorkout,
							currentExerciseIndex,
							setCurrentExerciseIndex,
							+1
						)
					}
				/>
				<GeneralButton
					text={'-1'}
					onClickFunction={() =>
						changeArrayIndex(
							currentWorkout,
							currentExerciseIndex,
							setCurrentExerciseIndex,
							-1
						)
					}
				/>
			</div>
		</div>
	);
};
export default MyRoutines;
