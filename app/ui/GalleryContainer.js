"use client";

import styles from "./gallery.module.css";
import { useState } from "react";

export default function GalleryContainer({ children }) {
  const [drag, setDrag] = useState(false);
  function move(e) {
    if (drag) {
      document.getElementById("galleryContainer").scrollLeft -= e.movementX;
    }
  }
  const exit = () => setDrag(false);
  return (
    <div
      id="galleryContainer"
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
