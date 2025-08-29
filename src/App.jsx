import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";

const App = () => {
	useEffect(() => {
		requestAnimationFrame(() => {
			const lenis = new Lenis({
				duration: 0.5,
				easing: (t) => t,
				smooth: true,
				smoothWheel: true,
				wheelMultiplier: 1.5,
				lerp: 0.1,
			});

			function raf(time) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}

			requestAnimationFrame(raf);
		});
	}, []);

	const [isShow, setIsShow] = useState(false);

	return (
		<div className=" container App">
			<nav className="navbar">
				<div className="nav-logo">LabProject</div>

				<span className="hum-div" onClick={() => setIsShow(!isShow)}>
					<i className="fa-solid fa-bars Hum"></i>
				</span>

				{/* Menu */}
				<ul className={`nav-menu ${isShow ? "nav-menu " : "mob-menu"}`}>
					<li>
						<NavLink to="/">HOME</NavLink>
					</li>
					<li>
						<NavLink to="/About">ABOUT</NavLink>
					</li>
					<li>
						<NavLink to="/services">SERVICES</NavLink>
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
			</nav>

			<div className="page-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="*" element={<Navigate to="/" replace />} />

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
		</div>
	);
};

export default App;
