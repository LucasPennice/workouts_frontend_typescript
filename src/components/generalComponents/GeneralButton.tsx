type buttonProps = {
	text: any;
	onClickFunction: () => void;
};
const GeneralButton = ({ onClickFunction, text }: buttonProps) => {
	return (
		<button className="generalBtn" onClick={onClickFunction}>
			{text}
		</button>
	);
};

export default GeneralButton;
