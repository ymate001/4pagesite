import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

function Productcard(props) {
	return (
		<ul className="d-flex flex-row">
			<Context.Consumer>
				{({ store }) => {
					return store.products.map((item, index) => {
						return (
							<div key={index} className="card p-2 col-3">
								<img
									className="card-img-top"
									src={item.image}
									alt="Card image cap"
								/>
								<div className="card-body">
									<h5 className="card-title">
										{item.productname}
									</h5>
									<p className="card-text">
										{" "}
										{item.description}
									</p>
									<p className="card-text">
										{" "}
										{"$" + item.price}{" "}
									</p>
									<a href="#" className="btn btn-primary">
										Add to cart
									</a>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		</ul>
	);
}

Productcard.propTypes = {
	items: PropTypes.array
};

export default Productcard;
