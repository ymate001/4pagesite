import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

import { home } from "./views/home.jsx";
import { product } from "./views/product.jsx";
import { blog } from "./views/blog.jsx";
import { checkout } from "./views/checkout.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={home} />
						<Route path="/demo" component={Demo} />
						<Route path="/home" component={home} />
						<Route path="/product" component={product} />
						<Route path="/blog" component={blog} />
						<Route path="/checkout" component={checkout} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
