import styled from "styled-components";

export const Wrapper = styled.main`
	display: grid;
	width: 100%;
	height: 100%;

	grid-template-columns: 100%;
	grid-template-rows: repeat(4, auto);
	padding: 40px 0;
	@media (min-width: 1000px) {
		padding: 0;
		grid-template-columns: 50% 50%;
		grid-template-rows: minmax(50vh, auto) minmax(50vh, auto);
	}
`;
