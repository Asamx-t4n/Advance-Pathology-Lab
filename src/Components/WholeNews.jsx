import { NavLink, useParams } from "react-router-dom";
import "./WholeNews.css";
import { NewsData, NewsQA } from "./Data";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const WholeNews = () => {
	const { id } = useParams();
	const Data = NewsData.find((items) => items.id === parseInt(id));
	if (!Data) return <h1>page not found</h1>;
	const [show, setShow] = useState(null);
	const showAns = (index) => setShow(show === index ? null : index);
	return (
		<div className="container-fluid">
			<div className="row ">
				<div className="col-md-8 col-sm-12 WholeNews ">
					<div className="WholeNews-Img-Div">
						<img className="WholeNews-Img" src={Data.src} alt="img" />
					</div>
					<h1 className="WholeNews-Title">{Data.Title}</h1>
					<p className="WholeNews-Date">{Data.date}</p>
					<p className="WholeNews-Description">{Data.description}</p>
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<div className="WholeNews-QA mt-2">
									{NewsQA.faqs.map((item, index) => (
										<div key={index} className="NewsQA">
											<p className="WholeNews-Question">{item.question}</p>
											<CiSearch
												onClick={() => showAns(index)}
												className="WholeNews-Icon"
											/>
											<div
												className={`Answrap ${show === index ? "open" : ""}`}
											>
												<p className="WholeNews-A">{item.answer}</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-sm-12">
					<div className="WholeNews-Button-List sticky-top ">
						<h1 className="Other-News">Other News</h1>
						<button className="WholeNews-Button">
							<NavLink className="WholeNews-Button-Link" to={`/News/${1}`}>
								Automated Sperm Quality Analyser
							</NavLink>
						</button>
						<button className="WholeNews-Button">
							<NavLink
								className={({ isActive }) =>
									isActive
										? "WholeNews-Button-Link active"
										: "WholeNews-Button-Link"
								}
								to={`/News/${2}`}
							>
								WHO Ref. Evaluation
							</NavLink>
						</button>
						<button className="WholeNews-Button">
							<NavLink className="WholeNews-Button-Link" to={`/News/${3}`}>
								SQA-IO
							</NavLink>
						</button>
						<button className="WholeNews-Button">
							<NavLink className="WholeNews-Button-Link" to={`/News/${4}`}>
								Now we are accrediated by AERSSC Nepal
							</NavLink>
						</button>
						<button className="WholeNews-Button">
							<NavLink className="WholeNews-Button-Link" to={`/News/${5}`}>
								Teej offer 2081
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WholeNews;
