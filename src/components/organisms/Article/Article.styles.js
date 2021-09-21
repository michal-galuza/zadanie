import styled from "styled-components";
import { Btn } from "../../atoms/Button/Button.styles";

export const ArticleStyled = styled.article`
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	${Btn} {
		margin-top: 30px;
	}

	@media (min-width: 1000px) {
		padding: 40px;
	}
`;
