import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [isloggedin , setLoggedIn] = useState(false)

  function handleLogin(){
    setLoggedIn(true)
  }

  function Logout(){
    setLoggedIn(false)
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">Amazon</div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="navbar-links">
        <a href="#deals" className="nav-link">
          Today's Deals
        </a>
        <a href="#cart" className="nav-link">
          Cart
        </a>

        {isloggedin ? (<div>Mark</div>) : (<button  className="nav-login-button" onClick={handleLogin}>
          Sign in
        </button>)}

        <button onClick={Logout}>Logout</button>

        
      </div>
    </div>
  );
}

export default Navbar;
