import React from "react";
import "./News.css";
import Card from "./Card";
import { NewsData } from "./Data";
import { NavLink } from "react-router-dom";

const News = () => {
	return (
		<div className="container-fluid  News">
			<div className="row">
				{NewsData.map((Item) => (
					<div className="col-md-4  News-Data">
						<NavLink className="News-List-Link" to={`/News/${Item.id}`}>
							<Card
								src={Item.src}
								Size="Medium"
								Title={Item.Title}
								Date={Item.date}
								CardDescription={Item.description}
							/>
						</NavLink>
					</div>
				))}
			</div>
		</div>
	);
};
export default News;
