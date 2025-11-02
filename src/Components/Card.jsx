import "./Card.css";

const Card = ({
	Title,
	CardDescription,
	Size,
	src,
	NPRs,
	btn,
	SCardDescription,
	NMC,
	EDU,
	Parameter,
	Details,
	Details1,
	Details2,
	Include,
	Include1,
	Include2,
	Include3,
	Include4,
	Include5,
	Include6,
	Include7,
	Include8,
	Include9,
	Include10,
	Include11,
	Include12,
	Include13,
	Include14,
	Include15,
	Include16,
	Include17,
	OriginalPrice,
	DiscountPrice,
	Extra,
	XCAP,
	NUM,
	PLUS,
	BLOGS,
	BCAP,
	Date,
	onClick,
}) => {
	return (
		<div className={`Cards ${Size}`} onClick={onClick}>
			<div className="Card-img-div">
				{src && <img className="Card-img" src={src} alt="IMG" />}
			</div>
			{NUM && (
				<div className="NUM-PLUS">
					<p className="NUM">{NUM}</p>
					<p className="PLUS">{PLUS}</p>
				</div>
			)}
			{BLOGS && <p className="BLOGS">{BLOGS}</p>}
			{BCAP && <p className="BCAP">{BCAP}</p>}
			{XCAP && <p className="XCAP">{XCAP}</p>}
			<div className="Card-title">{Title}</div>
			<div className="Card-Date">{Date}</div>
			{Parameter && <p className="Parameter">{Parameter}</p>}
			{Details && (
				<div className="Details">
					<h1 className="Details-Title">{Details}</h1>
					<p className="Details1">{Details1}</p>
					<p className="Details2">{Details2}</p>
				</div>
			)}
			{Include && (
				<div className="Include">
					<h1 className="Include-Title">{Include}</h1>
					<p className="Includes">{Include1}</p>
					<p className="Includes">{Include2}</p>
					<p className="Includes">{Include3}</p>
					<p className="Includes">{Include4}</p>
					<p className="Includes">{Include5}</p>
					<p className="Includes">{Include6}</p>
					<p className="Includes">{Include7}</p>
					<p className="Includes">{Include8}</p>
					<p className="Includes">{Include9}</p>
					<p className="Includes">{Include10}</p>
					<p className="Includes">{Include11}</p>
					<p className="Includes">{Include12}</p>
					<p className="Includes">{Include13}</p>
					<p className="Includes">{Include14}</p>
					<p className="Includes">{Include15}</p>
					<p className="Includes">{Include16}</p>
					<p className="Includes">{Include17}</p>
				</div>
			)}
			{OriginalPrice && (
				<p className="Original-price">Total Cost:{OriginalPrice}</p>
			)}
			{DiscountPrice && (
				<p className="Discount-price">Discount Price{DiscountPrice}</p>
			)}
			{Extra && <p className="Extra">Extra:{Extra}</p>}

			<div className="Card-description">{CardDescription}</div>
			{SCardDescription && (
				<div className="SCard-description">{SCardDescription}</div>
			)}
			{EDU && <p className="EDU">{EDU}</p>}
			{NPRs && <p className="NPRs">NPRs.{NPRs}</p>}
			{NMC && <p className="NMC">NMC NO:{NMC}</p>}
			{btn && <button className="Card-button">{btn}</button>}
		</div>
	);
};
export default Card;
