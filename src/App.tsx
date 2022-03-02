import './dist/globals.css';
import { useState } from 'react';
import whiteBg from './svgs/whiteBg.svg';
import blackBg from './svgs/blackBg.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainAppContainer from './components/mainAppContainer/MainAppContainer';
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen';
import { ROUTES } from './routes';
import Timer from './components/timer/Timer';
import Cronometer from './components/cronometer/Cronometer';
import MyWorkouts from './components/myWorkouts/MyWorkouts';
import UserProfile from './components/userProfile/userProfile';
import userInfo from './mockData.json';

interface Theme {
	backgroundColor: string;
	primaryColor: string;
	textColor: string;
	oursideColor: string;
	shadowColor: string;
	backgroundSvg: string;
	[key: string]: any;
}

const lightTheme: Theme = {
	backgroundColor: '#FFFFFF',
	oursideColor: '#D3D3D3',
	shadowColor: 'black',
	primaryColor: '',
	textColor: '#161A1D',
	backgroundSvg: whiteBg,
};
const darkTheme: Theme = {
	backgroundColor: '#161A1D',
	oursideColor: '#222F38',
	shadowColor: 'black',
	primaryColor: '',
	textColor: '#D3D3D3',
	backgroundSvg: blackBg,
};
interface themesObj {
	[key: string]: Theme;
}

const themes: themesObj = { light: lightTheme, dark: darkTheme };

const App = () => {
	const [theme, setTheme] = useState('dark');
	const [timerValue, setTimerValue] = useState(0);
	const [cronometerValue, setCronometerValue] = useState(0);
	const [isUserLogged, setIsUserLogged] = useState(true);
	const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
	//REEMPLAZAR CON LA LOGICA DE VERDAD DESPUES
	const { HOME, TIMER, CRONOMETER, MY_WORKOUTS, USER_PROFILE } = ROUTES;

	return (
		<BrowserRouter>
			<MainAppContainer
				theme={theme}
				setTheme={setTheme}
				currentTheme={themes[theme]}
				isUserLogged={isUserLogged}
			>
				<Routes>
					<Route
						path={HOME}
						element={<WelcomeScreen currentTheme={themes[theme]} />}
					/>
					<Route
						path={TIMER}
						element={
							<Timer timerValue={timerValue} setTimerValue={setTimerValue} />
						}
					/>
					<Route
						path={CRONOMETER}
						element={
							<Cronometer
								cronometerValue={cronometerValue}
								setCronometerValue={setCronometerValue}
							/>
						}
					/>
					<Route
						path={MY_WORKOUTS}
						element={
							<MyWorkouts
								theme={theme}
								currentTheme={themes[theme]}
								currentExerciseIndex={currentExerciseIndex}
								setCurrentExerciseIndex={setCurrentExerciseIndex}
							/>
						}
					/>
					<Route
						path={USER_PROFILE}
						element={
							<UserProfile userInfo={userInfo} currentTheme={themes[theme]} />
						}
					/>
				</Routes>
			</MainAppContainer>
		</BrowserRouter>
	);
};

export default App;
