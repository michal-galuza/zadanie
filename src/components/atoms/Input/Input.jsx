export default function Input({
	name,
	onChange,
	onBlur,
	value,
	type = "text",
	placeholder,
	required,
}) {
	return (
		<input
			name={name}
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			type={type}
			placeholder={placeholder}
			required={required}
		/>
	);
}
