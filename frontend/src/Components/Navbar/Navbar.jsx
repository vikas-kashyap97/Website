import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");
  const{getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "Shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Girls Fashion")}>
          <Link style={{ textDecoration: "none" }} to="/Girls Fashion">
            Girls Fashion
          </Link>
          {menu === "Girls Fashion" && <hr />}
        </li>

        <li onClick={() => setMenu("Boys Fashion")}>
          <Link style={{ textDecoration: "none" }} to="/Boys Fashion">
            Boys Fashion
          </Link>
          {menu === "Boys Fashion" && <hr />}
        </li>

        <li onClick={() => setMenu("Boys Footwear")}>
          <Link style={{ textDecoration: "none" }} to="/Boys Footwear">
          Boys Footwear
          </Link>
          {menu === "Kids Fashion" && <hr />}
        </li>


        <li onClick={() => setMenu("Girls Footwear")}>
          <Link style={{ textDecoration: "none" }} to="/Girls Footwear">
            Girls Footwear
          </Link>
          {menu === "Footwear" && <hr />}
        </li>
        <li onClick={() => setMenu("Toys")}>
          <Link style={{ textDecoration: "none" }} to="/Toys">
            Toys
          </Link>
          {menu === "Toys" && <hr />}
        </li>
        <li onClick={() => setMenu("Essential")}>
          <Link style={{ textDecoration: "none" }} to="/Essential">
            Essential
          </Link>
          {menu === "Essential" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
      {localStorage.getItem('auth-token')
      ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to="/login">
          <button>Login</button>
        </Link>}

        <Link to="/Cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;