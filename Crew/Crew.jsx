import { crew } from "../data";
import { useState, useLayoutEffect } from "react";
import "./crew.css";
import { bgMobile, bgDesktop, bgTablet } from "../bg";

export function Crew() {
  const [size, setSize] = useState([0, 0]);
  const [content, setContent] = useState(0);
  
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  size[0] <= 450
    ? (document.body.style.background = bgMobile[2].src)
    : size[0] <= 768
    ? (document.body.style.background = bgTablet[2].src)
    : (document.body.style.background = bgDesktop[2].src);

  let clickedDIV = null;

  const onClick = (id) => {
    setContent(id);
    const toggles = document.querySelectorAll(".toggle");
    const arrayToggles = Array.from(toggles);
    arrayToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        if (clickedDIV !== null) {
          clickedDIV.style.backgroundColor = "gray";
        }
        if (toggle !== clickedDIV) {
          toggle.style.backgroundColor = "white";
          console.log(arrayToggles.indexOf(toggle));
          clickedDIV = toggle;
        } else {
          clickedDIV = null;
        }
      });
    });
  };

  return (
    <div className="crew__div">
      <div className="crew__header">
        <h2>
          <span>02</span> meet your crew
        </h2>
      </div>
      <div className="crew__content">
        <div className="img__div">
          <img src={crew[content].images.webp} alt="crew picture" />
        </div>
        <div className="crew__role">{crew[content].role}</div>
        <div className="name__div">{crew[content].name}</div>
        <div className="crew__toggle">
          {crew.map((individual) => {
            return (
              <div
                className="toggle"
                onClick={() => onClick(individual.id)}
                key={individual.id}
              ></div>
            );
          })}
        </div>
        <div className="crew__info">{crew[content].bio}</div>
      </div>
    </div>
  );
}
