import "./PopUp.css";
import { RxCross1 } from "react-icons/rx";
import { PiTestTubeDuotone } from "react-icons/pi";
import { FaFileUpload } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

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
						<PiTestTubeDuotone />
						<p className="Tbutton1-cap">Book a test</p>
					</button>
					<button className="Tbutton2">
						<FaFileUpload />
						<p className="Tbutton1-cap">Upload prescription</p>
					</button>
					<button className="Tbutton3">
						<FaFileDownload />
						<p className="Tbutton1-cap">Download Reports</p>
					</button>
				</div>
			</div>
		</div>
	);
};
export default PopUp;
