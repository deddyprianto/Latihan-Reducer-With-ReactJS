import React from "react";
import { signIn } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import FaceIcon from "@material-ui/icons/Face";
import "../App.css";
import { useSelector } from "react-redux";

function Header() {
  const data = useSelector((state) => state.login);
  const { dataLogin } = data;
  return (
    <div className="header">
      <h3 className="text__header">Aplikasi Jual Beli Online</h3>
      <ul className="link">
        <li>
          <Link to="/shop">Mari Belanja</Link>
          <ShoppingBasketIcon />
        </li>
        <li>
          <Link to="/cart">Keranjang belanja</Link>
          <ShoppingCartIcon />
        </li>

        {dataLogin ? (
          <li className="li_displayedName">
            <p>{dataLogin.displayName}</p>
            <FaceIcon />
          </li>
        ) : (
          <li>
            <Link to="/login">Halaman Login</Link>
            <VpnKeyIcon />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
