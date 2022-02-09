import { GiAlarmClock } from 'react-icons/gi';
import IconButton from '../IconButton';
type AppProps = {
	theme: string;
	currentTheme: any;
	isUserLogged: boolean;
};
const colorModeIcons = {
	light: <GiAlarmClock />,
	dark: <GiAlarmClock />,
};
const MyRoutines = ({ theme, currentTheme, isUserLogged }: AppProps) => {
	const renderLoginSection = () => {
		return (
			<div className="logInWithGoogle">
				<h2>You need to log in</h2>
				<button className="generalBtn">Click here to log in with google</button>
			</div>
		);
	};
	return (
		<div className="content_container">
			<IconButton
				onClickProp={() => {}}
				theme={theme}
				icons={colorModeIcons}
				currentTheme={currentTheme}
				extraClass="myWorkouts_clockIcon"
			/>
			<h1>MY WORKOUTS</h1>
			{isUserLogged ? <h2>logged</h2> : renderLoginSection()}
		</div>
	);
};
export default MyRoutines;
