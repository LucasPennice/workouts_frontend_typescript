import { useState } from 'react';
import IconButton from '../IconButton';
import SideBar from '../sideBar/SideBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import userInfo from '../../mockData.json';
import React from 'react';
type AppProps = {
	children: JSX.Element;
	theme: any;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	currentTheme: any;
	isUserLogged: boolean;
};

const colorModeIcons = {
	light: <GiHamburgerMenu />,
	dark: <GiHamburgerMenu />,
};

const MainAppContainer = ({
	children,
	theme,
	setTheme,
	isUserLogged,
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
					setOpen={setOpen}
					currentTheme={currentTheme}
					isUserLogged={isUserLogged}
				/>
				{children}
			</div>
		</div>
	);
};
export default MainAppContainer;
