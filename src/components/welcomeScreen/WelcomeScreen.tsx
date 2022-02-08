import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

type AppProps = {
	currentTheme: any;
};
const WelcomeScreen = ({ currentTheme }: AppProps) => {
	const { textColor } = currentTheme;
	return (
		<div className="content_container">
			<h1>WELCOME</h1>
			<h2>blabla</h2>
			<div className="buttons_container">
				<Link to={ROUTES.HOME} style={{ borderColor: textColor }}>
					Home
				</Link>
				<Link to={ROUTES.TIMER} style={{ borderColor: textColor }}>
					Timer
				</Link>
				<Link to={ROUTES.CRONOMETER} style={{ borderColor: textColor }}>
					Cronometer
				</Link>
				<Link to={ROUTES.MY_WORKOUTS} style={{ borderColor: textColor }}>
					My workouts
				</Link>
			</div>
		</div>
	);
};
export default WelcomeScreen;
