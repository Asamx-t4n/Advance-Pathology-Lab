import React from "react";
import "./UploadPrescription.css";

const UploadPrescription = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12 UploadPresciption">
					<h2 className="UploadPrescription-Title">
						Home Collection Query Form
					</h2>
					<div className="UploadPrescription-FirstData">
						<div className="UploadPrescription-FirstData-first">
							<label className="UploadPrescription-DataName">
								Patient Name
							</label>
							<input className="DataInput" type="text" />
						</div>
						<div className="UploadPrescription-FirstData-Second">
							<label className="UploadPrescription-DataName">
								Patient City (District)
							</label>
							<input className="DataInput" type="text" />
						</div>
					</div>
					<div className="UploadPrescription-SecondData">
						<div className="UploadPrescription-SecondData-First">
							<label className="UploadPrescription-DataName">
								Phone Number
							</label>
							<input className="DataInput" type="tel" />
						</div>
						<div className="UploadPrescription-SecondData-Second">
							<label className="UploadPrescription-DataName">Email</label>
							<input className="DataInput" type="email" />
						</div>
					</div>
					<div className="UploadPrescription-ThirdData">
						<div className="UploadPrescription-ThirdData-First">
							<label className="UploadPrescription-DataName">Choose File</label>
							<input className="DataInput" type="file" />
						</div>
						<div className="UploadPrescription-ThirdData-Second">
							<label className="UploadPrescription-DataName">
								Write a Message
							</label>
							<input className="DataInput" type="text" />
						</div>
					</div>
					<div>
						<button className="UploadPrescription-Button">Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UploadPrescription;
