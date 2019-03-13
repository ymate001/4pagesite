import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

function blogpost(props) {
	return (
		<ul>
			<Context.Consumer>
				{({ store }) => {
					return store.blog.map((item, index) => {
						return (
							<div key={index} className="card">
								<img
									src={item.picture}
									className="card-img-top"
								/>
								<div className="card-body">
									<h5 className="card-title">{item.title}</h5>
									<p className="card-text">{item.textpost}</p>
									<p className="card-text">
										<small className="text-muted">
											Last updated 3 mins ago
										</small>
									</p>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		</ul>
	);
}

blogpost.propTypes = {
	items: PropTypes.array
};

export default blogpost;
