import React from "react";
import { Link } from "react-router-dom";
import Blogpost from "../component/blogpost.jsx";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class blog extends React.Component {
	render() {
		return (
			<div className="card-columns m-5">
				<Blogpost />
			</div>
		);
	}
}
