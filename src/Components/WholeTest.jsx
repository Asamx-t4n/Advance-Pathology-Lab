import "./WholeTest.css";
import { NavLink, useParams } from "react-router-dom";
import { Data2 } from "./Data";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const WholeDetails = () => {
	const { id } = useParams();
	const Item = Data2.find((D) => D.id === parseInt(id));
	if (!Item) return <h1>Page not Found</h1>;
	const [show, setShow] = useState(null);
	const HandleAns = (index) => {
		setShow(show === index ? null : index);
	};
	return (
		<div className="container-fluid WholeTest">
			<div className="row">
				<div className="col-md-8 ">
					<div className="WholeTest-Data">
						<p className="WholeTest-Title">{Item.Title}</p>
						{Item.LongDescription}
						<p className="WholeTest-Price">Price:{Item.Price}rs</p>
					</div>

					<div className="WholeTest-QueANs">
						<p className="WholeTest-Parameter">{Item.Parameter}</p>
						{Item.QA.map((qa, index) => (
							<div key={index} className="QueAns-Block">
								<p className="WholeTest-Que">{qa.Question}</p>
								<ul className="WholeTest-List">
									<CiSearch
										className="WholeTest-icon"
										onClick={() => HandleAns(index)}
									/>
									<div className={`Ans-Wraper ${show === index ? "open" : ""}`}>
										{qa.Answer.map((ans, i) => (
											<li className="WholeTest-Ans" key={i}>
												{ans}
											</li>
										))}
									</div>
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="col-md-4 sticky-top">
					<div className="WholeTest-Button-List sticky-top ">
						<h1 className="Other-Test">Other Tests</h1>
						<button className="WholeTest-Button">
							<NavLink className="WholeTest-Button-Link" k to={`/test/${1}`}>
								Comprehensive Health Check
							</NavLink>
						</button>
						<button className="WholeTest-Button">
							<NavLink
								className={({ isActive }) =>
									isActive
										? "WholeTest-Button-Link active"
										: "WholeTest-Button-Link"
								}
								to={`/test/${2}`}
							>
								Cancer Screening Male
							</NavLink>
						</button>
						<button className="WholeTest-Button">
							<NavLink className="WholeTest-Button-Link" to={`/test/${3}`}>
								Diabetes Health Check up
							</NavLink>
						</button>
						<button className="WholeTest-Button">
							<NavLink className="WholeTest-Button-Link" to={`/test/${4}`}>
								Advance Health Check up
							</NavLink>
						</button>
						<button className="WholeTest-Button">
							<NavLink className="WholeTest-Button-Link" to={`/test/${5}`}>
								Cancer screening profile-female
							</NavLink>
						</button>
						<button className="WholeTest-Button">
							<NavLink className="WholeTest-Button-Link" to={`/test/${6}`}>
								Fever Package
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WholeDetails;
