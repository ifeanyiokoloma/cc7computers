import React from "react";
import { useInView } from "react-intersection-observer";

const AnimateComponents = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      style={{ opacity: inView ? 1 : 0, transition: "1s ease-in-out" }}
    >
      {children}
    </div>
  );
};

export default AnimateComponents;
