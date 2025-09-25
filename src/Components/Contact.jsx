import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./Contact.css";
const Contact = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-12">
					<div className="Contact-Map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1279.2893124983339!2d87.98224600000002!3d26.64137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5bb4566af612b%3A0x151d8fd05929d6cf!2sAdvance%20Pathology%20Lab!5e1!3m2!1sen!2snp!4v1758786980658!5m2!1sen!2snp"
							width="100%"
							height="100%"
							style={{ border: 0, borderRadius: "12px" }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Advance Pathology Lab Location"
						></iframe>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row Contact">
						<div className="col-md-3">
							<p className="Office-Adress">Office Address</p>
							<p className="Birtamode">Birtamode</p>
						</div>
						<div className="col-md-3">
							<p className="Office-Phone">Phone Number</p>
							<p className="Number">023536070 , 9852628113,</p>
							<p className="Number">9802313984, 9817032003</p>
						</div>
						<div className="col-md-3">
							<p className="Office-Email">Email Address</p>
							<p className="Email">advancelab2010@gmail.com</p>
						</div>
						<div className="col-md-3">
							<p className="Office-Follow">Follow Us</p>
							<FaFacebookF className="Office-Icon" />
							<FaYoutube className="Office-Icon" />
							<FaTwitter className="Office-Icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Contact;
