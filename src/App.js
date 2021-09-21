import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import Router from "./pages/Router";
import GlobalStyles, { theme } from "./GlobalStyles";
import { STORE } from "./store";

export default function App() {
	return (
		<Provider store={STORE}>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Router />
			</ThemeProvider>
		</Provider>
	);
}
