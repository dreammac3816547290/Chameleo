"use client";

import styles from "./reviews.module.css";
import { useState } from "react";

export default function ReviewsContainer({ children }) {
  const [drag, setDrag] = useState(false);
  function move(e) {
    if (drag) {
      document.getElementById("reviewsContainer").scrollLeft -= e.movementX;
    }
  }
  const exit = () => setDrag(false);
  function button(side) {
    const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const shift = (side == "left" ? -3 : 3) * rem;
    let counter = 0;
    const max = 30;
    const interval = setInterval(() => {
      document.getElementById("reviewsContainer").scrollLeft += shift / max;
      counter++;
      if (counter == max) clearInterval(interval);
    }, 500 / max);
  }
  return (
    <div
      id="reviewsContainer"
      className={styles.container}
      onMouseDown={() => setDrag(true)}
      onMouseMove={move}
      onMouseUp={exit}
      onMouseLeave={exit}
    >
      <div
        className={styles.button}
        style={{ left: "10%" }}
        onClick={() => button("left")}
      >
        &#x1F844;
      </div>
      {children}
      <div
        className={styles.button}
        style={{ right: "10%" }}
        onClick={() => button("right")}
      >
        &#x1F846;
      </div>
    </div>
  );
}