/* eslint-disable react/prop-types */
import "./header.css";
import logo from "../assets/shared/logo.svg";
import Nav from "./Nav";

function Header() {
 
  return (
    <div className="header">
      <div className="logo__enclose">
        <div className="icon">
          <img src={logo} alt="logo" />
        </div>
        <div className="line"></div>
      </div>
    <Nav  />
    </div>
  );
}
export default Header;
