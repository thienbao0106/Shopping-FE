import { useEffect, useState } from "react";

type WindowDimension = {
  width: number;
  height: number;
};

const useDimension = () => {
  const [dimension, setDimension] = useState<WindowDimension>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return dimension;
};

export default useDimension;
