/* eslint-disable react/prop-types */
import "./header.css";
import logo from "../assets/shared/logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <div className="logo__div">
        <img src={logo} alt="logo" />
      </div>
      <div className="line"></div>
      <Nav />
    </div>
  );
}
export default Header;
