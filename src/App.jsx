import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Card from "./Components/Card";
import PopUp from "./Components/PopUp";
import WholeDetails from "./Components/WholeDetails";

const App = () => {
	let scrollTimeOut;
	const [show, setShow] = useState(true);
	const [isShow, setIsShow] = useState(false);
	const [showPopuUp, setshowPopUp] = useState(true);
	useEffect(() => {
		setshowPopUp(true);
	}, []);
	const HandlePop = () => {
		setshowPopUp(!showPopuUp);
	};
	useEffect(() => {
		const HandleScroll = () => {
			setShow(false);

			if (scrollTimeOut) {
				clearTimeout(scrollTimeOut);
			}
			scrollTimeOut = setTimeout(() => {
				setShow(true);
			}, 500);
		};
		window.addEventListener("scroll", HandleScroll);
		return () => {
			window.removeEventListener("scroll", HandleScroll);
			if (scrollTimeOut) {
				clearTimeout(scrollTimeOut);
			}
		};
	}, []);
	return (
		<div className=" container-fluid App">
			<nav className={`navbar ${show ? "Show-nav" : "Hide-nav"} `}>
				<div className="nav-logo">
					<img className="Logo" src="/Advance-Pathology-Lab/A-P-L-logo.png" />
				</div>

				<span className="hum-div" onClick={() => setIsShow(!isShow)}>
					<i className="fa-solid fa-bars Hum"></i>
				</span>

				{/* Menu */}
				<ul
					className={` nav-menu ${isShow ? "show " : ""}
					`}
				>
					<li>
						<NavLink to="/">HOME</NavLink>
					</li>
					<li>
						<NavLink to="/About">ABOUT</NavLink>
					</li>
					<li>
						<NavLink to="/service">SERVICES</NavLink>
					</li>
					<li>
						<NavLink to="/tests">TESTS</NavLink>
					</li>
					<li>
						<NavLink to="/teams">TEAMS</NavLink>
					</li>
					<li>
						<NavLink to="/news">NEWS</NavLink>
					</li>
					<li>
						<NavLink to="/notices">NOTICES</NavLink>
					</li>
					<li>
						<NavLink to="/blogs">BLOGS</NavLink>
					</li>
					<li>
						<NavLink to="/faq">FAQ</NavLink>
					</li>
					<li>
						<NavLink to="/contact">CONTACT</NavLink>
					</li>
				</ul>
				<marquee className="Marquee">Commitment To Quality</marquee>
			</nav>

			<div className="page-content">
				{showPopuUp && <PopUp onClose={HandlePop} />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/Service" element={<Service />} />
					<Route path="*" element={<Navigate to="/" replace />} />
					<Route path="/Details/:id" element={<WholeDetails />} />

					{/* <Route path="/services" element={<Services />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/news" element={<News />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} /> */}
				</Routes>
			</div>
			<div className="container-fluid Footer">
				<div className="row  ">
					<div className="col-md-3 col-sm-12 DIV1">
						<h3 className="F-About-Company">About Company</h3>
						<p className="F-About">
							A State of art Pathology lab , for reliable and quality reports.
						</p>
						<div className="F-Icons">
							<lord-icon
								src="https://cdn.lordicon.com/cxauoejw.json"
								trigger="hover"
								colors="primary:#2516c7,secondary:#4030e8"
								style={{ width: "30px", height: "30px" }}
							></lord-icon>
							<lord-icon
								src="https://cdn.lordicon.com/vnvsnvov.json"
								trigger="hover"
								colors="primary:#2516c7,secondary:#4030e8"
								style={{ width: "30px", height: "30px" }}
							></lord-icon>
							<lord-icon
								src="https://cdn.lordicon.com/japmxdiq.json"
								trigger="hover"
								colors="primary:#e83a30,secondary:#c71f16"
								style={{ width: "30px", height: "30px" }}
							></lord-icon>
						</div>
					</div>
					<div className="col-md-3 col-sm-12 DIV1">
						<h3 className="F-Useful-Link">Useful Link</h3>
						<ul className="F-Ul">
							<li>About</li>
							<li>Our Service</li>
							<li>News & Updates</li>
							<li>Notice</li>
							<li>Team</li>
							<li>FQA</li>
						</ul>
					</div>
					<div className="col-md-3 col-sm-12 DIV1">
						<h3 className="F-Connect-Us">Connect Us</h3>
						<div className="F-Service">
							<div>
								<p className="F-service-info-para ">
									Sun-Fri ( 7:00 AM - 4:30 PM )
								</p>
								<p className="F-service-info-para ">
									Sat ( 7:00 AM - 2:00 PM )
								</p>
							</div>
							<p>
								<strong className="F-location">
									<lord-icon
										src="https://cdn.lordicon.com/onmwuuox.json"
										trigger="hover"
										colors="primary:#916f10,secondary:#e8b730"
										style={{ width: "20px", height: "20px" }}
										className="mt-3 me-1"
									></lord-icon>
									Birtamode
								</strong>
							</p>
							<div className="service-info-num ">
								<p>
									<lord-icon
										src="https://cdn.lordicon.com/gkggixgu.json"
										trigger="hover"
										colors="primary:#2516c7,secondary:#30e849"
										style={{ width: "20px", height: "20px" }}
										className="mt-3 me-1 ms-2"
									></lord-icon>
								</p>
								<div className="F-NUM-DIV">
									<span className="F-NUM1">023536070 , 9852628113,</span>
									<span className="F-NUM1"> 9802313984, 9817032003</span>
								</div>
							</div>
							<div className="service-info-email">
								<span>
									<lord-icon
										src="https://cdn.lordicon.com/vpbspaec.json"
										trigger="hover"
										colors="primary:#2516c7,secondary:#30e849"
										style={{ width: "20px", height: "20px" }}
										className="mt-2 me-1"
									></lord-icon>
								</span>
								<span>advancelab2010@gmail.com</span>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-12 DIV1">
						<h3 className="F-Facebook-Page">Facebook Page</h3>
						<div className="F-Card">
							<Card
								Size="XSM"
								BLOGS="Blogs and Articles"
								BCAP="Total No. of Test And Panels"
								btn="View Details"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
