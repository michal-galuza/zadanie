import Input from "../../atoms/Input/Input";
import { LabelWrapper } from "./Label.styles";

export default function Label({
	value,
	type,
	onChange,
	onBlur,
	name,
	text,
	placeholder,
	error,
	required,
}) {
	return (
		<LabelWrapper>
			<p>{text}</p>
			<p style={{ color: "red" }}>{error}</p>
			<Input
				value={value}
				type={type}
				onBlur={onBlur}
				onChange={onChange}
				name={name}
				placeholder={placeholder}
				required={required}
			/>
		</LabelWrapper>
	);
}
