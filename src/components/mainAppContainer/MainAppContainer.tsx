import { useState } from 'react';
import IconButton from '../IconButton';
import SideBar from '../sideBar/SideBar';
import { GiHamburgerMenu } from 'react-icons/gi';
type AppProps = {
	children: JSX.Element;
	theme: any;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	currentTheme: any;
};

const colorModeIcons = {
	light: <GiHamburgerMenu />,
	dark: <GiHamburgerMenu />,
};

const MainAppContainer = ({
	children,
	theme,
	setTheme,
	currentTheme,
}: AppProps) => {
	const {
		oursideColor,
		textColor,
		backgroundColor,
		shadowColor,
		backgroundSvg,
	} = currentTheme;
	const [open, setOpen] = useState(false);

	return (
		<div
			className="mainAppContainer"
			style={{
				backgroundColor: oursideColor,
				color: textColor,
			}}
		>
			<div
				className="mainAppContent"
				style={{
					background: `url(${backgroundSvg})`,
					boxShadow: `0px 0px 5px  ${shadowColor}`,
				}}
			>
				<IconButton
					extraClass="toggleSideNav"
					onClickProp={() => setOpen(!open)}
					theme={theme}
					icons={colorModeIcons}
					currentTheme={currentTheme}
				/>

				<SideBar
					theme={theme}
					setTheme={setTheme}
					open={open}
					currentTheme={currentTheme}
				/>
				{children}
			</div>
		</div>
	);
};
export default MainAppContainer;
