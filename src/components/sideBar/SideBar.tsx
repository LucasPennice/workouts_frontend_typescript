import IconButton from '../IconButton';
import { Link } from 'react-router-dom';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { ROUTES } from '../../routes';

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

	return (
		<div
			className={open ? 'sideBar_container' : 'sideBar_container-closed'}
			style={{ backgroundColor: `rgba(0,0,0,0.1)` }}
		>
			<Link to={ROUTES.HOME}>Home</Link>
			<Link to={ROUTES.TIMER}>Timer</Link>
			<Link to={ROUTES.CRONOMETER}>Cronometer</Link>
			<Link to={ROUTES.MY_WORKOUTS}>My Workouts</Link>

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
