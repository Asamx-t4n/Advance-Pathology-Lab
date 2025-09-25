import "./Test.css";
import { Data2 } from "./Data";
import Card from "./Card";
import { Link } from "react-router-dom";

const Test = () => {
	return (
		<div className="container-fluid Test">
			<div className="row">
				{Data2.map((items) => (
					<div className="col-md-4 mt-2">
						<Card
							Size="Small"
							Title={items.Title}
							CardDescription={items.Description}
							SCardDescription={items.SDescription}
							NPRs={items.Price}
							btn=<Link className="Link-items" to={`/Test/${items.id}`}>
								{items.Btn}
							</Link>
						/>
					</div>
				))}
			</div>
		</div>
	);
};
export default Test;
