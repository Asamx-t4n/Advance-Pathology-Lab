import "./FAQS.css";
import { FAQData } from "./Data";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
const FAQS = () => {
	const [show, setShow] = useState(null);
	const ShowAns = (Index) => {
		setShow(show === Index ? null : Index);
	};
	return (
		<div className="container-fluid ">
			<div className="row">
				<div className="col-md-12">
					<h2 className="FAQS-QA-Title">Frequently Asked Questions</h2>
					{FAQData.Faqs.map((Item, Index) => (
						<div key={Index} className="FAQS-QA">
							<p className="FAQS-Q">{Item.question}</p>
							<CiSearch className="FAQS-Icons" onClick={() => ShowAns(Index)} />
							<div
								className={`FAQS-AnsWrapper ${show === Index ? "open" : ""}`}
							>
								<p className="FAQS-A">{Item.answer}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default FAQS;
