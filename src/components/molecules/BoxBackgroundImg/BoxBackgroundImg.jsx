import { Content, Wrapper } from "./BoxBackgroundImg.styles";

export default function BoxBackgroundImg({
	imgUrl,
	backgroundColor,
	children,
}) {
	return (
		<Wrapper imgUrl={imgUrl}>
			<Content backgroundColor={backgroundColor}>{children}</Content>
		</Wrapper>
	);
}
