import { H2 } from "./Subtitle.styles";

export default function Subtitle({ text, additionalStyles = {} }) {
	return <H2 style={{ ...additionalStyles }}>{text}</H2>;
}
