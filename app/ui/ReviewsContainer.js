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
  return (
    <div
      id="reviewsContainer"
      className={styles.container}
      onMouseDown={() => setDrag(true)}
      onMouseMove={move}
      onMouseUp={exit}
      onMouseLeave={exit}
    >
      {children}
    </div>
  );
}
