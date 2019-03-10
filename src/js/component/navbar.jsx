import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

export const Food = () => (
	<div>
		Favorite Food: <FontAwesomeIcon icon="igloo" />
	</div>
);

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/" className="navbar-brand">
					Our Shop
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/product" className="nav-link">
								Products
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/checkout" className="nav-link">
								My Cart <i className="fas fa-cart-plus" />
							</Link>
						</li>
					</ul>
				</div>
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit">
						Search
					</button>
				</form>
			</nav>
		);
	}
}
