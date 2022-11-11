import React from "react";
import BootstrapCard from "../bootstrap.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		 <div class="row row-cols-1 row-cols-md-5 g-4"> 
			<BootstrapCard title="A boat" text="this is the text" button="click me" url="https://www.yamahaboats.com/" img="https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/28/32/2832DB2E-7D15-4FA3-965B-D7E72B3AA1AB.jpg"> </BootstrapCard>
			<BootstrapCard title="Flights" text="this is the text" button="click me" url="https://travel.usnews.com/rankings/worlds-best-vacations/"img="https://cdn.onemileatatime.com/wp-content/uploads/2020/02/Philippine-Airlines-A350-Business-Class-48-1.jpg?width=1200&auto_optimize=low&quality=75&height=836&aspect_ratio=300%3A209" > </BootstrapCard>
			<BootstrapCard title="Yummy Food" text="this is the text" button="click me" url="https://www.timeout.com/miami/restaurants/best-restaurants-in-miami" img="https://focusgreece.com/wp-content/uploads/2018/08/Matsuhisa-Mykonos-2.jpg"> </BootstrapCard>
			<BootstrapCard title="Relaxation" text="this is the text" button="click me" url="https://www.fourseasons.com/surfside/spa/" img="https://www.mediterraneosorrento.com/wp-content/uploads/2021/03/Spa-1.jpg"> </BootstrapCard>
			<BootstrapCard title="A home" text="this is the text" button="click me" url="https://www.apartments.com/loft-one35-charlotte-nc/5bd21wq/" img="https://cdn.decoist.com/wp-content/uploads/2021/04/Fire-Pit-in-Backyard-28968.jpg"> </BootstrapCard>
		</div>
	);
};

export default Home;