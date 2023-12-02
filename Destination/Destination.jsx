import { useState, useLayoutEffect } from "react";
import { destinations } from "../data.js";
import { bgMobile, bgDesktop, bgTablet } from "../bg";

export function Destination() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  size[0] <= 450
    ? (document.body.style.background = bgMobile[1].src)
    : size[0] <= 768
    ? (document.body.style.background = bgTablet[1].src)
    : (document.body.style.background = bgDesktop[1].src);
  const [content, setContent] = useState(0);

  return (
    <div className="destination__div">
      <div className="destination__header">
        <h2>01 pick your destination</h2>
      </div>

      <div className="destination__content">
        <div className="img__div">
          <img
            src={destinations[content].images.webp}
            alt="destination"
            style={{ width: "150px", height: "150px" }}
          />
        </div>

        <div className="nav__div">
          {destinations.map((destination) => {
            return (
              <li
                key={destination.id}
                onClick={() => setContent(destination.id)}
              >
                {destination.name}
              </li>
            );
          })}
        </div>

        <div className="destination__info">
          <h2>{destinations[content].name}</h2>
          <p>{destinations[content].description}</p>
          <div className="more__info">
            <div className="distance">
              <h4>avg. distance</h4>
              <h3>{destinations[content].distance}</h3>
            </div>
            <div className="time">
              <h4>est. travel time</h4>
              <h3>{destinations[content].travel.toUpperCase()}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
