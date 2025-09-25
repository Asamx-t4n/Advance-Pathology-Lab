import { NavLink, Link, useParams } from "react-router-dom";
import "./WholeDetails.css";
import { Data } from "./Data";

const WholeDetails = () => {
	const { id } = useParams();
	const item = Data.find((D) => D.id === parseInt(id));
	if (!item) return <h1>Not found Page</h1>;
	return (
		<div className="container-fluid Whole-Details">
			<div className="row">
				<div className="col-md-8">
					<div>
						<h1 className="Whole-Title">{item.Title}</h1>
						<div className="Whole-Img-div">
							<img src={item.src} alt={item.Title} className="Whole-Img" />
						</div>
						<div>
							<p className="Description">{item.SDescription}</p>
						</div>
						<div className="SD-Description">
							<p> {item.SDescription1}</p>
							<p>{item.SDescription11}</p>
							<p>{item.SDescription12}</p>
							<p>{item.SDescription13}</p>
							<p>{item.SDescription14}</p>
							<p>{item.SDescription15}</p>
							<p> {item.SDescription2}</p>
							<p> {item.SDescription3}</p>
							<p> {item.SDescription4}</p>
							<p> {item.SDescription5}</p>
							<p> {item.SDescription6}</p>
							<p> {item.SDescription7}</p>
							<p> {item.SDescription8}</p>
							<p> {item.SDescription9}</p>
							<p> {item.SDescription10}</p>
							<p> {item.SDescription11}</p>
							<p> {item.SDescription12}</p>
							<div className="SDescription-div">
								<p>{item.SDescription21}</p>
								<div className="SDescription21-points">
									<p>{item.SDescription22}</p>
									<p>{item.SDescription23}</p>
									<p>{item.SDescription24}</p>
									<p>{item.SDescription25}</p>
								</div>
								<div className="SDescription21-points">
									<p>{item.SDescription26}</p>
									<p>{item.SDescription27}</p>
								</div>
								<p>{item.SDescription28}</p>
								<p>{item.SDescription29}</p>
								<p>{item.SDescription30}</p>
								<p>{item.SDescription31}</p>
								<p>{item.SDescription32}</p>
							</div>
						</div>
						<div className="STDescription">
							<p className="STDescription1">{item.STDescription1}</p>
						</div>
						<div className="Instruments">
							<p>{item.Instruments}</p>
						</div>

						<div className="Instruments-type">
							<p>{item.Instruments1}</p>
							<p>{item.Instruments2}</p>
							<p>{item.Instruments3}</p>
							<p>{item.Instruments4}</p>
						</div>
						<div className="STDescription">
							<p>{item.STDescription2}</p>
						</div>
					</div>
				</div>
				<div className="col-md-4 sticky-top">
					<div className="Buttons-div sticky-top">
						<h2 className="W-More-Service">More Services</h2>
						<button className="WholeDetails-Button">
							<NavLink
								className={({ isActive }) =>
									isActive ? "W-Buttons active" : "W-Buttons"
								}
								to={`/details/${1}`}
							>
								Clinical chemistry
							</NavLink>
						</button>
						<button className="WholeDetails-Button">
							<NavLink
								className={({ isActive }) =>
									isActive ? "W-Buttons active" : "W-Buttons"
								}
								to={`/details/${2}`}
							>
								Hematology
							</NavLink>
						</button>
						<button className="WholeDetails-Button">
							<NavLink
								className={({ isActive }) =>
									isActive ? "W-Buttons active" : "W-Buttons"
								}
								to={`/details/${3}`}
							>
								Histopathology
							</NavLink>
						</button>
						<button className="WholeDetails-Button">
							<NavLink
								className={({ isActive }) =>
									isActive ? "W-Buttons active" : "W-Buttons"
								}
								to={`/details/${4}`}
							>
								Microbiology and Serology
							</NavLink>
						</button>
						<button className="WholeDetails-Button">
							<NavLink
								className={({ isActive }) =>
									isActive ? "W-Buttons active" : "W-Buttons"
								}
								to={`/details/${5}`}
							>
								Immunology
							</NavLink>
						</button>
						<button className="WholeDetails-Button">
							<NavLink
								className={({ isActive }) =>
									isActive ? "W-Buttons active" : "W-Buttons"
								}
								to={`/details/${6}`}
							>
								Cytopathology
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WholeDetails;
