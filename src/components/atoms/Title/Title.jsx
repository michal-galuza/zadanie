import { H1 } from "./Title.styles";

export default function Title({ text, additionalStyles = {} }) {
	return <H1 style={{ ...additionalStyles }}>{text}</H1>;
}
