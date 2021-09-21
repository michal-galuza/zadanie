import { NavLink } from "react-router-dom";
import { Nav, Wrapper } from "./LogicPageTemplate.styles";

export default function LogicPageTemplate({ children, additionalStyles = {} }) {

	return (
		<Wrapper style={{ ...additionalStyles }}>
			<Nav>
				<NavLink activeStyle={{
					fontWeight: 'bold',
					background: "orange"
				}} exact to={"/"}>
					Start
				</NavLink>
				<NavLink activeStyle={{
					fontWeight: 'bold',
					background: "orange"
				}} to={"/list"}> Lista</NavLink>
				<NavLink activeStyle={{
					fontWeight: 'bold',
					background: "orange"
				}} to={"/add"}> Dodaj +</NavLink>
			</Nav>
			{children}
		</Wrapper>
	);
}
