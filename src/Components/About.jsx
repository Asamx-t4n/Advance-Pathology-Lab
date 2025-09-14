import "./About.css";
import { useState } from "react";

const About = () => {
	const CommonQue = [
		{
			question: "What should my blood sugar be?",
			answer: [
				"A: For Normal Patient Fasting should be less than 100 and 140 about two hours after meal.",
				"A: For Diabetic Patient- The American Diabetes Association recommends a blood glucose range of 80-130 before meals and less than 180 about 2 hours after a meal. This range should place your A1c under 7.",
			],
		},

		{
			question: "What is an A1c?",
			answer: [
				"A Hemoglobin A1c is a 2-3 month average of your blood sugars. This result gives you a good idea of how well your diabetes is being managed/controlled. ",
				,
				"Diabetes Association recommends an A1c of less than 7 to keep the risk of complications low.",
			],
		},
		{
			question: "Why does it matter if my blood sugar is 120 or 200?",
			answer: [
				"A: It is very important to keep your blood sugar level under control. When your blood sugar level is high it can cause damage in your veins and arteries. This damage could lead to complications later such as,",
				"heart attacks, strokes, kidney disease, neuropathies, vision problems, etc.",
			],
		},
		{
			question: "What foods have carbohydrates?",
			answer: [
				"Fruits, starchy vegetables, milk, yogurt, rice, cereals, bread and other grains all have carbs and give you important nutrients. Many snack foods, such as chips and popcorn, have carbs. Sweets, including",
				"regular soda, cakes, candy and cookies, also contain carbohydrates. Be sure to check the nutrition label on each food item to determine carbohyrdate content.",
			],
		},
	];
	const [openIndex, setOpenIndex] = useState(null);
	const toggle = (index) => {
		console.log(index);
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="About container-fluid">
			<div className="container-fluid  About-section">
				<h2 className="About-Title">About</h2>
				<div className="row">
					<div className="col-md-6">
						<div className="row">
							<img
								className="About-img"
								src="/Advance-Pathology-Lab/About.png"
								alt="About img"
							/>
						</div>
						<div className="row">
							<img
								className="About-img"
								src="/Advance-Pathology-Lab/Homepage1.jpg"
								alt="About img"
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="About-para-div">
							<p className="About-para1">
								Welcome to Advanced Pathology Lab,{" "}
								<strong>the first ISO certified diagnostic center</strong>{" "}
								located in Birtamode, Jhapa, Koshi district of Nepal.{" "}
								<strong>Since our inception in 2067 (2010 A.D.)</strong>, we
								have been at the forefront of providing{" "}
								<strong>
									accurate, reliable and timely inspection services
								</strong>
								, earning the trust of more than 10,000 satisfied customers
							</p>

							<p className="About-para2">
								Our <strong>state-of-the-art laboratory</strong> is equipped
								with
								<strong>state-of-the-art technology</strong>, enabling us to
								offer a range of advanced diagnostic services, including routine
								blood tests,
								<strong>advanced cancer screening</strong>, basic diagnostics
								and healthcare includes comprehensive research—all under one
								roof.
							</p>

							<p className="About-para3">
								At the Advanced Pathology Laboratory, we prioritize{" "}
								<strong>patient comfort and satisfaction</strong> with our
								in-house specimen collection and rapid online reporting. Our{" "}
								<strong>competitive pricing structure</strong>
								ensures that quality health care is accessible to all. Our
								highly qualified team includes skilled pathologists, skilled
								technicians, and dedicated support staff who work hard to
								maintain the highest standards of accuracy, care and
								confidentiality
							</p>

							<p className="About-para4">
								As the <strong>leading diagnostic center at Birtmode</strong>,
								we pride ourselves on being a trusted partner for patients and
								healthcare professionals. Whether you need routine checkups or
								advanced diagnosis, our goal is to empower you with the
								information you need to make informed healthcare decisions
							</p>

							<p className="About-para5">
								We believe that health screening should be easy, efficient and
								stress-free. This commitment keeps us investing in advanced
								technology, ongoing training and innovative practices to deliver
								world-class services right here at Birtmode. At the Advanced
								Pathology Laboratory,{" "}
								<strong>your health and well-being is our top priority</strong>.
								We are dedicated to supporting you on your journey to a healthy
								and happy life. Trust us to be your partners every step of the
								way in your health journey.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid Mission-Vision">
				<div className="row">
					<div className="col-md-6">
						<div className="Icon-div">
							<lord-icon
								src="https://cdn.lordicon.com/ewmfucya.json"
								trigger="hover"
								colors="primary:#242424,secondary:#545454,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#f24c00,senary:#ebe6ef"
								style={{ width: "100px", height: "100px" }}
							></lord-icon>
						</div>
						<div className="Our-Mission">
							<h1 className="Our-Mission-Title">Mision</h1>

							<h2 className="Commitment-Mission"> "Commitment to Quality"</h2>

							<p className="Our-Mission-Para">
								At <strong>Advance Pathology Lab</strong>, our mission is to
								advance healthcare through
								<strong>accurate and timely diagnostic services</strong>. We are
								dedicated to delivering
								<strong>precise and reliable pathology results</strong> that
								empower
								<strong>healthcare professionals</strong> in making informed
								decisions for
								<strong>patient care</strong>.
							</p>

							<p className="Our-Mission-Para">
								Our team of <strong>experienced pathologists</strong> and
								dedicated staff work collaboratively to uphold the highest
								standards of <strong>quality, accuracy, and efficiency</strong>{" "}
								in
								<strong>diagnostic testing</strong>.
							</p>

							<p className="Our-Mission-Para">
								<strong>Advance Pathology Lab</strong> is driven by a
								<strong>passion for advancing medical knowledge</strong> and
								enhancing the delivery of
								<strong>healthcare services</strong>, ultimately making a
								positive impact on the
								<strong>health and lives of individuals and communities</strong>
								we serve.
							</p>
						</div>
					</div>
					<div className="col-md-6">
						<div className="Icon-div">
							<lord-icon
								src="https://cdn.lordicon.com/knitbwfa.json"
								trigger="hover"
								colors="primary:#242424,secondary:#ffffff,tertiary:#3a3347,quaternary:#545454,quinary:#a5e830,senary:#66a1ee"
								style={{ width: "100px", height: "100px" }}
							></lord-icon>
						</div>
						<div className="Our-Vision">
							<h1 className="Our-Vision-Title">Our Vision</h1>
							<p className="Our-Vision-Para">
								Our vision is to be recognized globally for our unwavering
								commitment to providing
								<strong>healthcare professionals</strong> with
								<strong>reliable pathology results</strong>. Through
								<strong>continuous research</strong> and a focus on
								<strong>patient-centric care</strong>, we aim to be the
								<strong>trusted partner of choice</strong> for healthcare
								providers, contributing to a
								<strong>healthier and more informed society</strong>.
							</p>

							<p className="Our-Vision-Para">
								<strong>Advance Pathology Lab</strong> is dedicated to
								<strong>shaping the future of diagnostics</strong>,
								<strong>improving patient outcomes</strong>, and
								<strong>setting new standards of excellence</strong>
								in the field of <strong>pathology</strong>.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid Our-Motto">
				<div className="row">
					<div className="col-md-12">
						<h1 className="Our-Motto-Title">Our Moto</h1>
						<h2 className="Commitment-Mission">"Committed to Quality"</h2>

						<p className="Our-Motto-Para">
							Our motto <strong>"Committed to Quality"</strong> is an oath we
							take to prioritize and uphold the highest standards of
							<strong>excellence</strong>, <strong>reliability</strong>, and
							<strong>consistency</strong> in our clinical practice.
						</p>

						<p className="Our-Motto-Para">
							<strong>Dedication to Excellence:</strong> "Committed to Quality"
							means an unwavering dedication to achieving the highest level of
							<strong>quality</strong> in products, services or processes.
						</p>

						<p className="Our-Motto-Para">
							<strong>Consistency:</strong> It implies a commitment to
							delivering the
							<strong>highest quality</strong> consistently.
						</p>

						<p className="Our-Motto-Para">
							<strong>Customer-Centric Approach:</strong> Our
							<strong>clients</strong> and
							<strong>patients</strong> are of topmost priority, their feedback
							and suggestions help us in improving our services.
						</p>

						<p className="Our-Motto-Para">
							<strong>Continuous Improvement:</strong> Achieving and maintaining
							quality is an ongoing process and we continually seek ways to
							<strong>improve</strong> our services and processes to adapt to
							changing client demands and
							<strong>technological advancements</strong>.
						</p>

						<p className="Our-Motto-Para">
							<strong>Accountability:</strong> We take responsibility for the
							<strong>quality</strong> and
							<strong>reliability</strong> of our services. In case of issues or
							errors, we are committed to addressing them promptly, learning
							from them, and implementing <strong>corrective measures</strong>
							to prevent such future occurrences.
						</p>

						<p className="Our-Motto-Para">
							<strong>Building Trust:</strong> We emphasize the importance of
							building
							<strong>trust</strong> with our <strong>clients</strong>,
							<strong>patients</strong> and
							<strong>clinicians</strong>.
						</p>

						<p className="Our-Motto-Para">
							<strong>Ethical Responsibility:</strong> We value
							<strong>honesty</strong> and
							<strong>ethical conduct</strong> in all aspects of our operations.
						</p>
					</div>
				</div>
			</div>
			<section className=" container EXTERNAL-QUALITY ">
				<div className="row">
					<div className="col">
						<h3 className="EXTERNAL-QUALITY-TITLE">
							EXTERNAL QUALITY ASSURANCE SCHEME
						</h3>
						<div className="EXTERNAL-QUALITY-PROGRAMS">
							<p>Program 1: NPHL (NEQUAS) since</p>
							<p>Program 2: CMC Vellore (INDIA) since 2018</p>
							<p>Program 3: BIO-RAD since 2022</p>
						</div>
					</div>
				</div>
			</section>
			<section className="container ">
				<div className="QUE-LIST-GROUP">
					<div className="QUE-ICONS">
						{CommonQue.map((Item, index) => (
							<div key={index}>
								<p className="QUE-LIST" key={index}>
									{Item.question}
								</p>
								<lord-icon
									src="https://cdn.lordicon.com/wjyqkiew.json"
									trigger="hover"
									colors="primary:#4030e8,secondary:#242424"
									style={{ width: "25px", height: "25px" }}
									onClick={() => toggle(index)}
								></lord-icon>
								{openIndex === index &&
									Item.answer.map((ans, i) => (
										<p className="Common-Ans" key={i}>
											{ans}
										</p>
									))}
							</div>
						))}
					</div>
				</div>
			</section>
		</section>
	);
};

export default About;
