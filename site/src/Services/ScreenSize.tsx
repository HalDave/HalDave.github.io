import { useState, useEffect } from "react";
const minScreenWidth = 600;

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isMobile: screenSize.width < minScreenWidth,
    isDesktop: screenSize.width >= minScreenWidth,
  };
};

export default useScreenSize;
