import { useNavigate, useParams } from "react-router-dom";
import "./WholeNotice.css";
import { NoticesData } from "./Data";

const WholeNotice = () => {
	const { id } = useParams();
	const item = NoticesData.find((D) => D.id === parseInt(id));
	const CurrentId = parseInt(id);
	const Navigate = useNavigate();
	if (!item) return <h1>Page not Found!!!</h1>;
	const NextNotice = () => {
		const NextData = CurrentId + 1;
		if (NoticesData.find((D) => D.id === NextData)) {
			Navigate(`/Notice/${NextData}`);
		} else {
			Navigate("/notice");
		}
	};
	const BackNotice = () => {
		Navigate("/notice");
	};
	return (
		<div className="container-fluid ">
			<div className="row">
				<div className="col-md-12 WholeNotice">
					<div className="WholeNotice-Img-Div">
						<img className="WholeNotice-Img" src={item.src} alt="Notice-Img" />
					</div>
					<p className="WholeNotice-Title">{item.title}</p>
					<p className="WholeNotice-Date">{item.date}</p>
					<p className="WholeNotice-Description">{item.description}</p>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="WholeNotice-Button-Div">
							<button onClick={NextNotice} className="WholeNotice-Button">
								Next Notice
							</button>
							<button onClick={BackNotice} className="WholeNotice-Button">
								Back
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WholeNotice;
