import "./BookTest.css";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const BookTest = ({ setShowForm }) => {
	const [verified, setVerified] = useState(false);
	return (
		<div className="container-fluid BookTest">
			<div className=" DataBookTest">
				<div className="BookATest-Button-Div-Cross">
					<button
						className="BookATest-Button-Cross"
						onClick={() => setShowForm(false)}
					>
						<RxCross1 />
					</button>
				</div>
				<h2 className="BookATest-Appoinment-Title">Book Your Appoinment</h2>

				<div>
					<div className="BookATest-Name-Number-Address">
						<input
							className="BookATest-Name"
							type="text"
							required
							placeholder="Full Name"
						/>
						<input
							className="BookATest-Number"
							type="text"
							placeholder="Number"
						/>
						<input
							className="BookATest-Address"
							type="text"
							placeholder="Addess"
						/>
					</div>
					<div className="BookATest-Gender-Age-Date">
						<select className="BookATest-Gender" required>
							<option>Male</option>
							<option>Male</option>
							<option>Others</option>
						</select>
						<input className="BookATest-Date" type="date" />
						<input className="BookATest-Age" type="number" placeholder="Age" />
					</div>
					<div className="BookATest-Note-Div">
						<textarea className="BookATest-Note" type="textarea" />
					</div>
					<div className="BookATest-CheckBox">
						<label>
							<input
								type="checkbox"
								checked={verified}
								onChange={(e) => setVerified(e.target.checked)}
							/>
							I'm not a robot
						</label>
					</div>
					<div className="BookATest-Button-Div">
						<button className="BookATest-Button" disabled={!verified}>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BookTest;
