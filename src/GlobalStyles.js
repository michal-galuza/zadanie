import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    word-break: break-word;
  }

`;
export const theme = {
	backgrounds: {
		main: "white",
		blue: "rgba(46,125,222,0.65)",
	},
	colors: {
		blue: "rgb(46,125,222)",
		main: "black",
		white: "white",
	},
};

export default GlobalStyles;
