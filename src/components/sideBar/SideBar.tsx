import IconButton from '../IconButton';
import { Link } from 'react-router-dom';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { ROUTES } from '../../routes';
import { useLocation } from 'react-router-dom';

type AppProps = {
	theme: any;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	open: boolean;
	currentTheme: any;
};

const colorModeIcons = {
	light: <BsFillMoonFill />,
	dark: <BsSunFill />,
};

const SideBar = ({ theme, setTheme, open, currentTheme }: AppProps) => {
	const changeTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};
	const { pathname } = useLocation();
	const { HOME, TIMER, CRONOMETER, MY_WORKOUTS } = ROUTES;

	const checkIfActive = (anchorPath: string) => {
		return pathname === anchorPath ? 'a-active' : '';
	};

	return (
		<div
			className={open ? 'sideBar_container' : 'sideBar_container-closed'}
			style={{ backgroundColor: `rgba(0,0,0,0.1)` }}
		>
			<Link className={checkIfActive(HOME)} to={HOME}>
				Home
			</Link>
			<Link className={checkIfActive(TIMER)} to={TIMER}>
				Timer
			</Link>
			<Link className={checkIfActive(CRONOMETER)} to={CRONOMETER}>
				Cronometer
			</Link>
			<Link className={checkIfActive(MY_WORKOUTS)} to={MY_WORKOUTS}>
				My Workouts
			</Link>

			<IconButton
				onClickProp={changeTheme}
				theme={theme}
				icons={colorModeIcons}
				currentTheme={currentTheme}
			/>
		</div>
	);
};

export default SideBar;
