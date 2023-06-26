import { Link } from "react-router-dom"
import React from 'react'
import axios from "axios";


const Navbar = () => {
  const logout = () => {
    axios.post('http://localhost:8000/api/users/logout', {}, {withCredentials: true})
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }

  return (
  
    <nav className="container row justify-content-center mx-auto bg-black" > 
      <h4>
        <span className="global-nav-text">
            <Link to="/"><i class="uil uil-house-user">home</i> </Link>
          </span>
        <span className="global-nav-text ">
          <Link to="/"><i class="uil uil-signin"></i>login</Link>
        </span>
        <span className="global-nav-text ">
        <Link to ="/" onClick={logout}> <i class="uil uil-signout"></i>logOut</Link >
        </span>
      </h4> 
    </nav>
  );
};


export default Navbar;