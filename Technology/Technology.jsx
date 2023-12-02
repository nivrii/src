import { useState, useLayoutEffect } from "react";
import { bgMobile, bgDesktop, bgTablet } from "../bg";
export function Technology() {
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
      <div className="tech__header">
        <h2>03 check out your technology</h2>
      </div>
    </>
  );
}
