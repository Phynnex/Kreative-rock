import React from "react";
import styles from "../../assets/css/home.module.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  return (
    <div className={styles.carousel}>
      <div className={styles.inner} style={{ transform: "translateX(-0%)" }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default Carousel;
