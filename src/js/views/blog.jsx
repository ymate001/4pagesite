import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class blog extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Blog</h1>
				<div className="row m-5">
					<div className="media">
						<img
							className="mr-3"
							src="https://via.placeholder.com/64"
							alt="Generic placeholder image"
						/>
						<div className="media-body">
							<h5 className="mt-0">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla
							vel metus scelerisque ante sollicitudin. Cras purus
							odio, vestibulum in vulputate at, tempus viverra
							turpis. Fusce condimentum nunc ac nisi vulputate
							fringilla. Donec lacinia congue felis in faucibus.
						</div>
					</div>
				</div>

				<div className="row m-5">
					<div className="media">
						<img
							className="mr-3"
							src="https://via.placeholder.com/64"
							alt="Generic placeholder image"
						/>
						<div className="media-body">
							<h5 className="mt-0">Media heading</h5>
							Cras sit amet nibh libero, in gravida nulla. Nulla
							vel metus scelerisque ante sollicitudin. Cras purus
							odio, vestibulum in vulputate at, tempus viverra
							turpis. Fusce condimentum nunc ac nisi vulputate
							fringilla. Donec lacinia congue felis in faucibus.
							<div className="media mt-3">
								<a className="pr-3" href="#">
									<img
										src="https://via.placeholder.com/64"
										alt="Generic placeholder image"
									/>
								</a>
								<div className="media-body">
									<h5 className="mt-0">Media heading</h5>
									Cras sit amet nibh libero, in gravida nulla.
									Nulla vel metus scelerisque ante
									sollicitudin. Cras purus odio, vestibulum in
									vulputate at, tempus viverra turpis. Fusce
									condimentum nunc ac nisi vulputate
									fringilla. Donec lacinia congue felis in
									faucibus.
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<ul className="list-unstyled">
						<li className="media">
							<img
								className="mr-3"
								src="https://via.placeholder.com/64"
								alt="Generic placeholder image"
							/>
							<div className="media-body">
								<h5 className="mt-0 mb-1">
									List-based media object
								</h5>
								Cras sit amet nibh libero, in gravida nulla.
								Nulla vel metus scelerisque ante sollicitudin.
								Cras purus odio, vestibulum in vulputate at,
								tempus viverra turpis. Fusce condimentum nunc ac
								nisi vulputate fringilla. Donec lacinia congue
								felis in faucibus.
							</div>
						</li>
						<li className="media my-4">
							<img
								className="mr-3"
								src="https://via.placeholder.com/64"
								alt="Generic placeholder image"
							/>
							<div className="media-body">
								<h5 className="mt-0 mb-1">
									List-based media object
								</h5>
								Cras sit amet nibh libero, in gravida nulla.
								Nulla vel metus scelerisque ante sollicitudin.
								Cras purus odio, vestibulum in vulputate at,
								tempus viverra turpis. Fusce condimentum nunc ac
								nisi vulputate fringilla. Donec lacinia congue
								felis in faucibus.
							</div>
						</li>
						<li className="media">
							<img
								className="mr-3"
								src="https://via.placeholder.com/64"
								alt="Generic placeholder image"
							/>
							<div className="media-body">
								<h5 className="mt-0 mb-1">
									List-based media object
								</h5>
								Cras sit amet nibh libero, in gravida nulla.
								Nulla vel metus scelerisque ante sollicitudin.
								Cras purus odio, vestibulum in vulputate at,
								tempus viverra turpis. Fusce condimentum nunc ac
								nisi vulputate fringilla. Donec lacinia congue
								felis in faucibus.
							</div>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
