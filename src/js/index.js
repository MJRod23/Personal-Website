//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import Home from "./component/home.jsx";
import BootstrapCard from "./bootstrap.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";

//render your react application
ReactDOM.render(<div>
	<Navbar/>
	<Jumbotron
	title="Welcome to your future"
	description="Work for it"
	buttonURL="https://youtu.be/qztuEucrNBc"
	buttonLabel="Go to your future"
	image="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"/>
	<Home/> 
	<Footer/>
	</div>, document.querySelector("#app"));

