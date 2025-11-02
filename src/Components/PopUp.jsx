import "./PopUp.css";
import { RxCross1 } from "react-icons/rx";
import { PiTestTubeDuotone } from "react-icons/pi";
import { FaFileUpload } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BookTest from "./BookTest";

const PopUp = ({ onClose }) => {
	const [showForm, setShowForm] = useState(false);
	const navigate = useNavigate();
	return (
		<div className="container-fluid PopUp">
			<div className="row Buttton-row">
				<button className="TButton-cross ">
					<RxCross1 onClick={onClose} />
				</button>
				<p className="Tbutton1-cap">Important Notice</p>
				<div className="col-12 Buttton-col">
					<button
						onClick={() => {
							setShowForm(!showForm);
						}}
						className="Tbutton1"
					>
						<PiTestTubeDuotone />
						<p className="Tbutton1-cap">Book a test</p>
					</button>
					<div className={`BooKATest-Animation ${showForm ? "add" : ""}`}>
						{showForm && <BookTest setShowForm={setShowForm} />}
					</div>
					<button
						onClick={() => {
							onClose();
							navigate("/UploadPrescription");
						}}
						className="Tbutton2"
					>
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
