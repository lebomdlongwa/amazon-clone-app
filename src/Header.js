import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  return (
    <div className="header">
      <Link to="/login">
        <img
          src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
          alt="amazon__logo"
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__options">
            <p>Hello</p>
            <h3>Sign In</h3>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__options">
            <p>Returns</p>
            <h3>& Orders</h3>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__options">
            <p>Your</p>
            <h3>Prime</h3>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="checkout">
            <ShoppingBasketIcon />
            <div className="checkout__items">{basket?.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
