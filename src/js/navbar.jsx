import React from "react";

//nav bar 
const Navbar = (props) => {
	//here you have to return expected html using the properties being passed to the component
	return (
  <ul className="nav justify-content-end navbar-dark">
    {/* <div className="navbar-dark"> </div> */}
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul>
    )}

export default Navbar;