import "./home.css";
import { useState, useLayoutEffect } from "react";
import { bgMobile, bgDesktop, bgTablet } from "../bg";
function Home() {
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
    ? (document.body.style.background = bgMobile[0].src)
    : size[0] <= 768
    ? (document.body.style.background = bgTablet[0].src)
    : (document.body.style.background = bgDesktop[0].src);
    
  return (
    <>
      <div className="body__home">
        <div className="info__home">
          <h2>So, you want to travel to</h2>
          <h2 className="h2__space">Space</h2>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore__home">Explore</div>
      </div>
    </>
  );
}
export default Home;
