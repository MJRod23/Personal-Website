import React from "react";

// card
const BootstrapCard = (props) => {
	return (
		<div class="col">
		<div className="card m-5">
			<img className="card-img-top" style={{width:"100%", height:"120px", objectFit:"cover"}} src={props.img} alt="Card image cap"  />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href={`${props.url}`} target="_blank" className="btn btn-primary">{props.button}  </a>
				
			</div>
		</div> 
		</div>
		
	);
};



export default BootstrapCard;