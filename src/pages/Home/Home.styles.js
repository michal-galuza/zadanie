import styled from "styled-components";
import { Wrapper } from "../../components/molecules/BoxBackgroundImg/BoxBackgroundImg.styles";

const Content = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	bakcground: ${({ theme }) => theme.backgrounds.main};
`;
export const TopRightContent = styled(Content)`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: repeat(4, minmax(200px, 350px));
	margin-top: 50px;
	@media (min-width: 1000px) {
		grid-template-columns: 50% 50%;
		grid-template-rows: 50% 50%;
		margin-top: 0;
	}

	${Wrapper} {
		width: 100%;
		height: 100%;
	}
`;
export const TopLeftContent = styled(Content)``;
export const BottomRightContent = styled(Content)``;
export const BottomLeftContent = styled(Content)``;
