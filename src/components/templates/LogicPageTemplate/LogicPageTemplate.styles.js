import styled from "styled-components";

export const Nav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 45px;
	background: white;

	a {
		margin: 0 15px;
		width: 80px;
		height: 40px;
		color: black;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
export const Wrapper = styled.main`
	padding-top: 45px;
	display: grid;
	grid-template-rows: 60px auto;
	grid-template-columns: 100%;
	justify-items: center;
	align-items: center;
	justify-content: center;
	align-content: center;
	min-height: 100vh;
`;
