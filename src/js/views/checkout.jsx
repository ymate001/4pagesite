import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class checkout extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Checkout</h1>
				<div className="row">
					<div className="col">
						<form>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputEmail4">Email</label>
									<input
										type="email"
										className="form-control"
										id="inputEmail4"
										placeholder="Email"
									/>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputPassword4">
										Password
									</label>
									<input
										type="password"
										className="form-control"
										id="inputPassword4"
										placeholder="Password"
									/>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="inputAddress">Address</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress"
									placeholder="1234 Main St"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="inputAddress2">Address 2</label>
								<input
									type="text"
									className="form-control"
									id="inputAddress2"
									placeholder="Apartment, studio, or floor"
								/>
							</div>
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputCity">City</label>
									<input
										type="text"
										className="form-control"
										id="inputCity"
									/>
								</div>
								<div className="form-group col-md-4">
									<label htmlFor="inputState">State</label>
									<select
										id="inputState"
										className="form-control">
										<option selected>Choose...</option>
										<option>...</option>
									</select>
								</div>
								<div className="form-group col-md-2">
									<label htmlFor="inputZip">Zip</label>
									<input
										type="text"
										className="form-control"
										id="inputZip"
									/>
								</div>
							</div>
							<div className="form-group">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id="gridCheck"
									/>
									<label
										className="form-check-label"
										htmlFor="gridCheck">
										Check me out
									</label>
								</div>
							</div>
							<button type="submit" className="btn btn-primary">
								Sign in
							</button>
						</form>
					</div>

					<div className="col-4">
						<h4 className="d-flex justify-content-between align-items-center mb-3">
							<span className="text-muted">Your cart</span>
							<span className="badge badge-secondary badge-pill">
								3
							</span>
						</h4>
						<ul className="list-group mb-3">
							<li className="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<h6 className="my-0">Product name</h6>
									<small className="text-muted">
										Brief description
									</small>
								</div>
								<span className="text-muted">$12</span>
							</li>
							<li className="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<h6 className="my-0">Second product</h6>
									<small className="text-muted">
										Brief description
									</small>
								</div>
								<span className="text-muted">$8</span>
							</li>
							<li className="list-group-item d-flex justify-content-between lh-condensed">
								<div>
									<h6 className="my-0">Third item</h6>
									<small className="text-muted">
										Brief description
									</small>
								</div>
								<span className="text-muted">$5</span>
							</li>
							<li className="list-group-item d-flex justify-content-between bg-light">
								<div className="text-success">
									<h6 className="my-0">Promo code</h6>
									<small>EXAMPLECODE</small>
								</div>
								<span className="text-success">-$5</span>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<span>Total (USD)</span>
								<strong>$20</strong>
							</li>
						</ul>
					</div>
				</div>

				<div className="p-5">
					<h3>Payment</h3>
					<div className="row ">
						<div className="custom-control custom-radio">
							<input
								type="radio"
								id="customRadio1"
								name="customRadio"
								className="custom-control-input"
							/>
							<label
								className="custom-control-label"
								htmlFor="customRadio1">
								Debit Card
							</label>
						</div>
						<div className="custom-control custom-radio">
							<input
								type="radio"
								id="customRadio2"
								name="customRadio"
								className="custom-control-input"
							/>
							<label
								className="custom-control-label"
								htmlFor="customRadio2">
								Credit Card
							</label>
						</div>
						<div className="custom-control custom-radio">
							<input
								type="radio"
								id="customRadio2"
								name="customRadio"
								className="custom-control-input"
							/>
							<label
								className="custom-control-label"
								htmlFor="customRadio2">
								PayPal
							</label>
						</div>
					</div>

					<div>
						<form>
							<div className="form-row p-3">
								<div className="col-md-4 mb-3">
									<label htmlFor="validationServer01">
										Name on Card
									</label>
									<input
										type="text"
										className="form-control is-valid"
										id="validationServer01"
										placeholder="Name as it appears on card"
										value=""
										required
									/>
									<div className="valid-feedback">
										Name on card is required
									</div>
								</div>
								<div className="col-md-4 mb-3">
									<label htmlFor="validationServer02">
										Card Number
									</label>
									<input
										type="text"
										className="form-control is-valid"
										id="validationServer02"
										placeholder="Full card number"
										value=""
										required
									/>
									<div className="valid-feedback">
										Full card number
									</div>
								</div>
							</div>
							<div className="form-row p-3">
								<div className="col-md-3 mb-3">
									<label htmlFor="validationServer04">
										Expiration
									</label>
									<input
										type="text"
										className="form-control is-invalid"
										id="validationServer04"
										placeholder="Expiration"
										required
									/>
									<div className="invalid-feedback">
										Expiration date required
									</div>
								</div>
								<div className="col-md-3 mb-3">
									<label htmlFor="validationServer05">
										CVV
									</label>
									<input
										type="text"
										className="form-control is-invalid"
										id="validationServer05"
										placeholder="CVV"
										required
									/>
									<div className="invalid-feedback">
										Security code required
									</div>
								</div>
							</div>
							<div className="form-group">
								<div className="form-check">
									<input
										className="form-check-input is-invalid"
										type="checkbox"
										value=""
										id="invalidCheck3"
										required
									/>
									<label
										className="form-check-label"
										htmlFor="invalidCheck3">
										Agree to terms and conditions
									</label>
									<div className="invalid-feedback">
										You must agree before submitting.
									</div>
								</div>
							</div>
							<button className="btn btn-primary" type="submit">
								Submit Payment
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
