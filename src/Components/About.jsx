import "./About.css";

const About = () => {
	return (
		<section className="about container">
			{/* Top full image */}
			<div className="about-img"></div>

			{/* Bottom text */}
			<div className="about-text">
				<h2>About Advance Pathology Lab</h2>

				<p>
					Welcome to <strong>Advance Pathology Lab</strong>, the first
					ISO-certified diagnostic center located in Birtamode, Jhapa, Koshi
					district of Nepal. Since our inception in 2067 (2010 A.D.), we have
					been at the forefront of providing accurate, reliable, and timely
					diagnostic services, earning the trust of more than 10,000 satisfied
					customers.
				</p>

				<p>
					Our state-of-the-art laboratory is equipped with modern technology,
					enabling us to offer a wide range of advanced diagnostic services —
					including routine blood tests, advanced cancer screening, basic
					diagnostics, and healthcare — all under one roof.
				</p>

				<p>
					At Advance Pathology Laboratory, we prioritize patient comfort and
					satisfaction with in-house specimen collection and rapid online
					reporting. Our competitive pricing ensures that quality healthcare is
					accessible to all.
				</p>

				<p>
					Our highly qualified team includes skilled pathologists, experienced
					technicians, and dedicated support staff who work hard to maintain the
					highest standards of accuracy, care, and confidentiality.
				</p>

				<p>
					Whether you need routine checkups or advanced diagnosis, our mission
					is to empower you with the information you need to make informed
					healthcare decisions. We believe that health screening should be easy,
					efficient, and stress-free.
				</p>

				<p>
					At Advance Pathology Laboratory, your health and well-being is our top
					priority. We are committed to supporting you on your journey to a
					healthy and happy life.
					<strong>Trust us to be your partners every step of the way.</strong>
				</p>
			</div>
			<div className="row">
				<div className="col-md-6 ">
					<div className="Card">
						<h1 className="certification">Certifications</h1>
						<div className="certifi">
							<div className="Certifi1"></div>
							<div className="Certifi2"></div>
							<div className="Certifi3"></div>
						</div>
					</div>
				</div>
				<div className="col-md-6 ">
					<div className="Card">
						<h1 className="certification">Ratings</h1>
						<div className="Ratings">
							<div className="Trust">
								<lord-icon
									src="https://cdn.lordicon.com/yaxbmvvh.json"
									trigger="hover"
									colors="primary:#242424,secondary:#f4dc9c,tertiary:#8930e8"
									style={{ width: "50px", height: "50px" }}
								></lord-icon>
								<p className="Trusted-By">Trusted by 10K+</p>
								<p className="Cutomer-Rate"> customers</p>
							</div>
							<div className="Rate">
								<lord-icon
									src="https://cdn.lordicon.com/edplgash.json"
									trigger="hover"
									colors="primary:#e8b730,secondary:#e3c0ac,tertiary:#918d10"
									style={{ width: "50px", height: "50px" }}
								></lord-icon>
								<p className="Google-rate">4.0/5 Google </p>
								<p className="Cutomer-Rate"> rating</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="container ">
				<div className="row Vision-Motto-Mission">
					<div className="col-md-4 ">
						<lord-icon
							src="https://cdn.lordicon.com/ajzwsrcs.json"
							trigger="hover"
							colors="primary:#f28ba8,secondary:#000000,tertiary:#913710,quaternary:#f9c9c0,quinary:#5c0e0a"
							style={{ width: "100px ", height: "100px" }}
							className="Mission-Icon"
						></lord-icon>
						<h3 className=" Mission">Our Mission</h3>
						<p className="Mission-para">
							Our mission is to advance healthcare by delivering reliable,
							timely, and high-quality diagnostic services. Through a team of
							experienced pathologists and skilled staff, we focus on providing
							accurate results that empower medical professionals to make
							informed decisions. We are committed to innovation, ethical
							practices, and efficiency, ensuring that every patient receives
							the care and attention they deserve.
						</p>
					</div>
					<div className="col-md-4 ">
						<lord-icon
							src="https://cdn.lordicon.com/ntfnmkcn.json"
							trigger="hover"
							colors="primary:#d1e3fa,secondary:#916f10,tertiary:#242424,quaternary:#f9c9c0,quinary:#f24c00"
							style={{ width: "100px ", height: "100px" }}
							className="Vision-Icon"
						></lord-icon>
						<h3 className=" Vision">Our Vision</h3>

						<p className="Vision-para">
							We envision becoming a globally recognized leader in pathology by
							upholding the highest standards in diagnostics. Through
							innovation, advanced technology, and patient-centered care, we aim
							to be the trusted partner for healthcare providers and improve
							patient outcomes worldwide.
						</p>
					</div>
					<div className="col-md-4 ">
						<lord-icon
							src="https://cdn.lordicon.com/xmoniccu.json"
							trigger="hover"
							colors="primary:#ffffff,secondary:#66a1ee"
							style={{ width: "100px ", height: "100px" }}
							className="Motto-Icon"
						></lord-icon>
						<h3 className=" Motto">Our Motto</h3>

						<p className="Motto-para">
							<p>
								<strong className="ms-2">"Committed to Quality"</strong>
							</p>
							At Advance Pathology Lab, our motto “Committed to Quality”
							reflects our dedication to precision, trust, and excellence in
							every diagnostic service we provide. We believe that accuracy in
							testing builds confidence among healthcare professionals and
							patients, ensuring dependable results that form the foundation of
							effective treatment.
						</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default About;
