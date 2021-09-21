import styled from "styled-components";

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${({ imgUrl }) => imgUrl});
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 320px;
`;
export const Content = styled.div`
	width: 100%;
	height: 100%;
	background: ${({ backgroundColor, theme }) =>
		backgroundColor || theme.backgrounds.blue};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;

	img {
		width: 100%;
		height: 100%;
		object-fit: scale-down;
	}
`;
