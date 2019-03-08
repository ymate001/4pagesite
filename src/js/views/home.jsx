import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Our Store</h1>

				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">Feature product</h1>
						<p className="lead">
							This is a modified jumbotron that occupies the
							entire horizontal space of its parent.
						</p>
					</div>
				</div>
				<a href="#" classNameName="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
				<hr />
				<Link to="/demo">
					<button classNameName="btn btn-primary">
						Check the Context in action
					</button>
				</Link>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div>
		);
	}
}
