/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    const open = document.querySelector(".nav__mobile");
    open.classList.remove("open");
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const toggler = document.querySelector(".hamburger");
    const open = document.querySelector(".nav__mobile");
    function toggleEvent() {
      open.classList.toggle("open");
      setIsOpen(!isOpen);
    }
    toggler.addEventListener("click", toggleEvent);
    return () => toggler.removeEventListener("click", toggleEvent);
  }, [isOpen]);

  return (
    <>
      <div className="hamburger">
        {isOpen ? (
          <FontAwesomeIcon className="icon" icon={faXmark} />
        ) : (
          <FontAwesomeIcon className="icon" icon={faBarsStaggered} />
        )}
      </div>
      <div className="nav__mobile">
        <ul>
          <li onClick={close}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>01</span> Home
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/crew" style={{ textDecoration: "none" }}>
              <span>02</span> Crew
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/destination" style={{ textDecoration: "none" }}>
              <span>03</span> Destination
            </Link>
          </li>
          <li onClick={close}>
            <Link to="/technology" style={{ textDecoration: "none" }}>
              <span>04</span> Technology
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav__desktop">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nav;
