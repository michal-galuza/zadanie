import styled from "styled-components";

export const Btn = styled.button`
	border: 3px solid ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.blue};
	background: transparent;
	font-weight: bold;
	font-size: 1rem;
	width: 180px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
