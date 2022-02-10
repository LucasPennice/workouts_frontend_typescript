type buttonProps = {
	text: any;
	onClickFunction: () => void;
	disabled?: boolean;
};
const GeneralButton = ({
	onClickFunction,
	text,
	disabled = false,
}: buttonProps) => {
	return (
		<button
			className={disabled ? 'generalBtn_disabled' : 'generalBtn'}
			onClick={onClickFunction}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default GeneralButton;
