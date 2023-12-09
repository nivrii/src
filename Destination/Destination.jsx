import { useState, useLayoutEffect, useEffect } from "react";
import { destinations } from "../data.js";
import './destination.css'
import { bgMobile, bgDesktop, bgTablet } from "../bg";

export function Destination() {
  const [size, setSize] = useState([0, 0]);
  const [content, setContent] = useState(0);
  const [active, setActive] = useState(false)
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
  
    // function isActive(index) {
    //   setContent(index)
    //   const selected = destinations[content].name
    //   console.log(selected)
    // }
    useEffect(()=>{
      const selected = destinations[content].name
      selected.style.color = 'white'
      console.log(selected)
    },[content])

  return (
    <div className="destination__div">
      <div className="destination__header">
        <h2><span>0{content + 1}</span> pick your destination</h2>
      </div>

      <div className="destination__content">
        <div className="img__div">
          <img
            src={destinations[content].images.webp}
            alt="destination"
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
