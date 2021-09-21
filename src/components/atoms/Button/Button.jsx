import { Btn } from "./Button.styles";

export default function Button({
	type = "button",
	onClick = () => {},
	children,
	disabled = false,
	additionalStyles = {},
}) {
	return (
		<Btn
			style={{ ...additionalStyles }}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</Btn>
	);
}
