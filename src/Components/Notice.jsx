import React from "react";
import "./Notice.css";
import { NoticesData } from "./Data";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Notice = () => {
	return (
		<div className="container-fluid Notice">
			<div className="row">
				{NoticesData.map((item) => (
					<div key={item.id} className="col-md-4 Notice-Data">
						<NavLink className="Notice-List-Link" to={`/Notice/${item.id}`}>
							<Card
								Title={item.title}
								src={item.src}
								Date={item.date}
								CardDescription={item.description}
							/>
						</NavLink>
					</div>
				))}
			</div>
		</div>
	);
};
export default Notice;
