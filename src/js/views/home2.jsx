import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class home2 extends React.Component {
	render() {
		return (
			<div className="text-center">
				<h1>Our Store</h1>
				<div className="">
					<div className="slideshow-container">
						<div className="mySlides fade">
							<div className="numbertext">1 / 3</div>
							<img src="img1.jpg" style="width:100%" />
							<div className="text">Caption Text</div>
						</div>

						<div className="mySlides fade">
							<div className="numbertext">2 / 3</div>
							<img src="img2.jpg" style="width:100%" />
							<div className="text">Caption Two</div>
						</div>

						<div className="mySlides fade">
							<div classNameName="numbertext">3 / 3</div>
							<img src="img3.jpg" style="width:100%" />
							<div className="text">Caption Three</div>
						</div>

						<a className="prev" onClick="plusSlides(-1)">
							&#10094;
						</a>
						<a className="next" onClick="plusSlides(1)">
							&#10095;
						</a>
					</div>
					<br />

					<div style="text-align:center">
						<span className="dot" onClick="currentSlide(1)" />
						<span className="dot" onClick="currentSlide(2)" />
						<span className="dot" onClick="currentSlide(3)" />
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
			</div>
		);
	}
}
