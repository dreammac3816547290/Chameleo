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
        style={{ left: "5%" }}
        onClick={() => button("left")}
      >
        &#x2039;
      </div>
      {children}
      <div
        className={styles.button}
        style={{ right: "5%" }}
        onClick={() => button("right")}
      >
        &#x203A;
      </div>
    </div>
  );
}
