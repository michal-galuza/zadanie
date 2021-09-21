import { Text } from "./Description.styles";

export default function Description({ text, additionalStyles = {} }) {
	return (
		<>
			{typeof text === "object" ? (
				text.map((item, index) => (
					<Text style={{ ...additionalStyles }} key={item + index}>
						{item}
					</Text>
				))
			) : (
				<Text style={{ ...additionalStyles }}>{text}</Text>
			)}
		</>
	);
}
