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

interface Theme {
	backgroundColor: string;
	primaryColor: string;
	textColor: string;
	oursideColor: string;
	shadowColor: string;
	backgroundSvg: string;
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
	return (
		<BrowserRouter>
			<MainAppContainer
				theme={theme}
				setTheme={setTheme}
				currentTheme={themes[theme]}
			>
				<Routes>
					<Route
						path={ROUTES.HOME}
						element={<WelcomeScreen currentTheme={themes[theme]} />}
					/>
					<Route path={ROUTES.TIMER} element={<Timer />} />
					<Route path={ROUTES.CRONOMETER} element={<Cronometer />} />
					<Route
						path={ROUTES.MY_WORKOUTS}
						element={<MyWorkouts theme={theme} currentTheme={themes[theme]} />}
					/>
				</Routes>
			</MainAppContainer>
		</BrowserRouter>
	);
};

export default App;
