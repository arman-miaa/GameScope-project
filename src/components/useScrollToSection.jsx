import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToSection = () => {
    const { hash } = useLocation(); 
    console.log(hash);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash); 
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); 
      }
    }
  }, [hash]);
};

export default useScrollToSection;
