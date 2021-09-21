import { Header } from "../../molecules";
import { ArticleStyled } from "./Article.styles";
import { Description } from "../../atoms";

export default function Article({
	title,
	description,
	subtitle,
	additionalStyles,
	additionalHeaderStyles,
	additionalTitleStyles,
	additionalSubtitleStyles,
	additionalDescriptionStyles,
	children,
}) {
	return (
		<ArticleStyled style={{ ...additionalStyles }}>
			<Header
				title={title}
				subtitle={subtitle}
				additionalStyles={additionalHeaderStyles}
				additionalSubtitleStyles={additionalSubtitleStyles}
				additionalTitleStyles={additionalTitleStyles}
			/>
			<Description
				additionalStyles={additionalDescriptionStyles}
				text={description}
			/>
			{children}
		</ArticleStyled>
	);
}
