import { Wrapper } from "./HomeTemplate.styles";

export default function HomeTemplate({ children, additionalStyles = {} }) {
	return <Wrapper style={{ ...additionalStyles }}>{children}</Wrapper>;
}
