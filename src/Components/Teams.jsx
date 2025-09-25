import "./Teams.css";
import { Data3 } from "./Data";
import Card from "./Card";
const Teams = () => {
	return (
		<div className="container Teams">
			<div className="row">
				{Data3.map((items) => (
					<div className="col-md-4 Teams-List">
						<Card
							key={items.id}
							src={items.src}
							Size="Medium"
							Title={items.Title}
							CardDescription={items.Description}
							EDU={items.edu}
							NMC={items.nmc}
							SCardDescription={items.SDescription}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
export default Teams;
