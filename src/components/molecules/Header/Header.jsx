import { Subtitle, Title } from "../../atoms";
import { HeaderStyled } from "./Header.styles";

export default function Header({
	title,
	subtitle,
	additionalStyles,
	additionalTitleStyles,
	additionalSubtitleStyles,
}) {
	return (
		<HeaderStyled style={{ ...additionalStyles }}>
			<Title text={title} additionalStyles={additionalTitleStyles} />
			<Subtitle
				text={subtitle}
				additionalStyles={additionalSubtitleStyles}
			/>
		</HeaderStyled>
	);
}
