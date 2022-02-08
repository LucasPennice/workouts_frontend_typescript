type AppProps = {
	onClickProp?: () => void;
	theme: string;
	currentTheme: any;
	icons: any;
	extraClass?: string;
};

const IconButton = ({
	onClickProp = () => {},
	theme,
	icons,
	currentTheme,
	extraClass = '',
}: AppProps) => {
	const { backgroundColor, textColor } = currentTheme;
	return (
		<button
			className={`icon ${extraClass}`}
			onClick={onClickProp}
			style={{ backgroundColor: textColor, color: backgroundColor }}
		>
			{icons[theme]}
		</button>
	);
};
export default IconButton;
