import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Add from "./Add/Add";
import List from "./List/List";
import Details from "./Details/Details";

export default function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/add" component={Add} />
				<Route path="/list" component={List} />
				<Route path="/details/:id" component={Details} />
			</Switch>
		</BrowserRouter>
	);
}
