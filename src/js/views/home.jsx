import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Our Store</h1>

				<div
					id="carouselExampleIndicators"
					className="carousel slide m-5"
					data-ride="carousel">
					<ol className="carousel-indicators">
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="0"
							className="active"
						/>
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="1"
						/>
						<li
							data-target="#carouselExampleIndicators"
							data-slide-to="2"
						/>
					</ol>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img
								className="d-block w-100"
								src="https://via.placeholder.com/200x100"
								alt="First slide"
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="https://via.placeholder.com/200x100"
								alt="Second slide"
							/>
						</div>
						<div className="carousel-item">
							<img
								className="d-block w-100"
								src="https://via.placeholder.com/200x100"
								alt="Third slide"
							/>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="prev">
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						/>
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleIndicators"
						role="button"
						data-slide="next">
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						/>
						<span className="sr-only">Next</span>
					</a>
				</div>

				<Link to="/product" className="btn btn-success">
					To the Shop
				</Link>
				<hr />
				<Link to="/demo">
					<button className="btn btn-primary">
						Check the Context in action
					</button>
				</Link>
			</div>
		);
	}
}
