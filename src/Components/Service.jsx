import React from "react";
import "./Service.css";
import { Data } from "./Data";
import Card from "./Card";
import { Link } from "react-router-dom";

const Service = () => {
	return (
		<div className="container-fluid Our-Service">
			<div className="row">
				{Data.map((item) => (
					<div className="col-md-4">
						<Link className="card-link" to={`/details/${item.id}`}>
							<Card
								key={item.id}
								src={item.src}
								Title={item.Title}
								CardDescription={item.Description}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
export default Service;
