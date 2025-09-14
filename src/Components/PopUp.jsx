import "./PopUp.css";
import { RxCross1 } from "react-icons/rx";

const PopUp = ({ onClose }) => {
	return (
		<div className="container-fluid PopUp">
			<div className="row Buttton-row">
				<button className="TButton-cross ">
					<RxCross1 onClick={onClose} />
				</button>
				<p className="Tbutton1-cap">Important Notice</p>
				<div className="col-12 Buttton-col">
					<button className="Tbutton1">
						<lord-icon
							src="https://cdn.lordicon.com/owwibima.json"
							trigger="hover"
							style={{ width: "30px", height: "30px" }}
						></lord-icon>
						<p className="Tbutton1-cap">Book a test</p>
					</button>
					<button className="Tbutton2">
						<lord-icon
							src="https://cdn.lordicon.com/sbuaiykm.json"
							trigger="hover"
							style={{ width: "30px", height: "30px" }}
						></lord-icon>
						<p className="Tbutton1-cap">Upload prescription</p>
					</button>
					<button className="Tbutton3">
						<lord-icon
							src="https://cdn.lordicon.com/hnqamtrw.json"
							trigger="hover"
							style={{ width: "30px", height: "30px" }}
						></lord-icon>
						<p className="Tbutton1-cap">Download Reports</p>
					</button>
				</div>
			</div>
		</div>
	);
};
export default PopUp;
