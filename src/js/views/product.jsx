import React from "react";
import { Link } from "react-router-dom";
import Productcard from "../component/productcard.jsx";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class product extends React.Component {
	render() {
		const styles = {
			width: "5em"
		};
		return (
			<div className="text-center m-5">
				<h1>Products</h1>

				<div className="row">
					<div className="">
						<Productcard />
					</div>
				</div>
			</div>
		);
	}
}
