import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Card from "./Card";
import { Data, Data2, Data3, Data4 } from "./Data";
import { PiNumberZeroBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
	var settings1 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};
	const settings2 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const settings3 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const settings4 = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="container HOME">
			<div className="row">
				<div className="col-md-9 col-sm-12">
					<Slider {...settings1}>
						<div>
							<div className="Home-img1"></div>
						</div>
						<div>
							<div className="Home-img2"></div>
						</div>
						<div>
							<div className="Home-img3"></div>
						</div>
						<div>
							<div className="Home-img4"></div>
						</div>
						<div>
							<div className="Home-img5"></div>
						</div>
					</Slider>
				</div>
				<div className="col-md-3 ">
					<div className="Service">
						<h3 className="service-info-head">Service Time</h3>
						<div>
							<p className="service-info-para">Sun-Fri ( 7:00 AM - 4:30 PM )</p>
							<p className="service-info-para">Sat ( 7:00 AM - 2:00 PM )</p>
						</div>
						<p>
							<strong className="location">
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
									className="mt-3 me-1"
								></lord-icon>
							</p>
							<span>023536070 , 9852628113,</span>{" "}
							<span> 9802313984, 9817032003</span>
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
			</div>
			<div className="container Book-home-collection">
				<div className="row">
					<div className="col-md-4 Certificate-bookHome">
						<div className="">
							<div className="Home-book">
								<h2 className="Home-book-title">Book Home Collection</h2>
								<div className="Home-book1">
									<lord-icon
										src="https://cdn.lordicon.com/warimioc.json"
										trigger="hover"
										colors="primary:#2516c7,secondary:#242424"
										style={{ width: "50px", height: "50px" }}
									></lord-icon>
									<p className="Home-book-cap">Convenient & Time Saving</p>
								</div>
								<div className="Home-book2">
									<lord-icon
										src="https://cdn.lordicon.com/fikcyfpp.json"
										trigger="hover"
										colors="primary:#000000,secondary:#5c0e0a"
										style={{ width: "50px", height: "50px" }}
									></lord-icon>
									<p className="Home-book-cap">
										Free Home Collection & Cancellation
									</p>
								</div>
								<div className="Home-book3">
									<lord-icon
										src="https://cdn.lordicon.com/zmajywmc.json"
										trigger="hover"
										style={{ width: "50px", height: "50px" }}
									></lord-icon>
									<p className="Home-book-cap">Online Access to Reports</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 Certificate-bookHome">
						<h1 className="Uploads-Report">Your Reports</h1>
						<div className="Uploads">
							<button className="UTbutton1">
								<lord-icon
									src="https://cdn.lordicon.com/owwibima.json"
									trigger="hover"
									style={{ width: "30px", height: "30px" }}
								></lord-icon>
								<p className="UTbutton1-cap">Book a test</p>
							</button>
							<button className="UTbutton2">
								<lord-icon
									src="https://cdn.lordicon.com/sbuaiykm.json"
									trigger="hover"
									style={{ width: "30px", height: "30px" }}
								></lord-icon>
								<p className="UTbutton1-cap">Upload prescription</p>
							</button>
							<button className="UTbutton3">
								<lord-icon
									src="https://cdn.lordicon.com/hnqamtrw.json"
									trigger="hover"
									style={{ width: "30px", height: "30px" }}
								></lord-icon>
								<p className="UTbutton1-cap">Download Reports</p>
							</button>
						</div>
					</div>
					<div className="col-md-4 Certificate-bookHome">
						<div className="Card">
							<h1 className="certification">Certifications</h1>
							<div className="certifi">
								<div className="Certifi1"></div>
								<div className="Certifi2"></div>
								<div className="Certifi3"></div>
							</div>
						</div>
					</div>
					{/* <div className="container Book-now">
						<div className="Book-now">
							<div className="">
								<div className="">
									<button className="Book-now-btn">Book Now</button>
									<p>
										Not sure about the tests? Upload your prescription!
										<NavLink to="/upload">Click here</NavLink>
									</p>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<div className="container SM-about">
				<div className="row">
					<div className="col-md-5 col-sm-12">
						<div className="SM-about-img"></div>
					</div>
					<div className="col-md-7 col-sm-12">
						<div className="SM-about-para">
							<h2 className="SM-about-title">About Us</h2>
							<p>
								Welcome to Advanced Pathology Lab, the first ISO certified
								diagnostic center located in Birtamode, Jhapa, Koshi district of
								Nepal. Since our inception in 2067 (2010 A.D.), we have been at
								the forefront of providing accurate, reliable and timely
								inspection services, earning the trust of more than 10,000
								satisfied customers Our state-of-the-art laboratory is equipped
								with state-of-the-art technology, enabling us to offer a range
								of advanced diagnostic services, including routine blood tests,
								adva...
							</p>
							<NavLink to="/Home">Read More...</NavLink>
							<div className="Card-rate">
								<h1 className="certification">Ratings</h1>
								<div className="Ratings">
									<div className="Trust">
										<lord-icon
											src="https://cdn.lordicon.com/yaxbmvvh.json"
											trigger="hover"
											colors="primary:#242424,secondary:#f4dc9c,tertiary:#8930e8"
											style={{ width: "50px", height: "50px" }}
											className="Rate-trust-icon"
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
											className="Rate-trust-icon"
										></lord-icon>
										<p className="Google-rate">4.0/5 Google </p>
										<p className="Cutomer-Rate"> rating</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container Our-Service">
				<div className="row">
					<div className="col-12">
						<h2 className="Our-Service-Title"> Our-Service</h2>
						<Slider {...settings2}>
							{Data.map((item) => (
								<Card
									key={item.id}
									src={item.src}
									Title={item.Title}
									CardDescription={item.Description}
								/>
							))}
						</Slider>
					</div>
					<div className=" Our-Expert-Teams-btn-div">
						<button className="Our-Expert-Teams-btn">View All</button>
					</div>
				</div>
			</div>
			<div className=" container Popular-Tests">
				<div className="row">
					<div className="col-12">
						<h2 className="Our-Service-Title"> Popular-Tests </h2>
						<Slider {...settings3}>
							{Data2.map((items) => (
								<Card
									key={items.id}
									Size="Small"
									Title={items.Title}
									CardDescription={items.Description}
									SCardDescription={items.SDescription}
									NPRs={items.Price}
									btn={items.Btn}
								/>
							))}
						</Slider>
					</div>
					<div className=" Our-Expert-Teams-btn-div">
						<button className="Our-Expert-Teams-btn">View All</button>
					</div>
				</div>
			</div>
			<div className=" container Our-Expert-Teams">
				<div className="row">
					<div className="col-12">
						<h2 className="Our-Expert-Teams-Title"> Our Expert Teams </h2>
						<Slider {...settings4}>
							{Data3.map((items) => (
								<Card
									key={items.id}
									src={items.src}
									Size="Medium"
									Title={items.Title}
									CardDescription={items.Description}
									EDU={items.edu}
									NMC={items.nmc}
									SCardDescription={items.SDescription}
								/>
							))}
						</Slider>
					</div>
					<div className=" Our-Expert-Teams-btn-div">
						<button className="Our-Expert-Teams-btn">View All</button>
					</div>
				</div>
			</div>
			<div className=" container Choose-Health-Packages">
				<div className="row">
					<div className="col-12">
						<h2 className="Choose-Health-Packages-Title">
							Choose Health Packages
						</h2>
						<Slider {...settings3}>
							{Data4.map((items) => (
								<Card
									Size="Large"
									Title={items.Title}
									Parameter={items.Parameter}
									Details={items.Details}
									Details1={items.Details1}
									Details2={items.Details2}
									Include={items.Include}
									Include1={items.include1}
									Include2={items.include2}
									Include3={items.include3}
									Include4={items.include4}
									Include5={items.include5}
									Include6={items.include6}
									Include7={items.include7}
									Include8={items.include8}
									Include9={items.include9}
									Include10={items.include10}
									Include11={items.include11}
									Include12={items.include12}
									Include13={items.include13}
									Include14={items.include14}
									Include15={items.include15}
									Include16={items.include16}
									OriginalPrice={items.OriginalPrice}
									DiscountPrice={items.DiscountPrice}
									Extra={items.Extra}
								/>
							))}
						</Slider>
					</div>
				</div>
			</div>
			<div className=" container Why-Advance-Pathology-lab">
				<div className="row Why-Advance-Pathology-lab-row">
					<h2 className="Why-Advance-Pathology-lab-Title">
						Why Advance Pathology Lab?
					</h2>
					<p className="Why-Advance-Pathology-lab-Title1">
						Accurate results, advanced technology, expert care
					</p>
					<div className="col-md-3">
						<Card
							Size="XSM"
							NUM={<PiNumberZeroBold />}
							PLUS={<FaPlus />}
							XCAP="Total No. of Test And Panels"
						/>
					</div>
					<div className="col-md-3">
						<Card
							Size="XSM"
							NUM={<PiNumberZeroBold />}
							PLUS={<FaPlus />}
							XCAP="Total No. of Customer"
						/>
					</div>
					<div className="col-md-3">
						<Card
							Size="XSM"
							NUM={<PiNumberZeroBold />}
							PLUS={<FaPlus />}
							XCAP="Samples Collected"
						/>
					</div>
					<div className="col-md-3">
						<Card
							Size="XSM"
							NUM={<PiNumberZeroBold />}
							PLUS={<FaPlus />}
							XCAP="Patient Service Centers"
						/>
					</div>
				</div>
				<div className="row Blogs-News-Lab">
					<h2 className="Extra-Information">Extra Information</h2>
					<div className="col-md-4">
						<Card
							Size="XSM"
							BLOGS="Latest News & Tips"
							BCAP="Total No. of Test And Panels"
							btn="View Details"
						/>
					</div>
					<div className="col-md-4">
						<Card
							Size="XSM"
							BLOGS="Blogs and Articles"
							BCAP="Total No. of Test And Panels"
							btn="View Details"
						/>
					</div>
					<div className="col-md-4">
						<Card
							Size="XSM"
							BLOGS="A-P-L Videos"
							BCAP="Total No. of Test And Panels"
							btn="View Details"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
