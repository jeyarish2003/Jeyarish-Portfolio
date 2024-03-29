import { React, useState } from "react";
import pic from "../Asset/scroll-up.jpeg";

function Scrollup() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <img
        className="h-[80px] w-[80px] fixed right-1 bottom-2"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
        src={pic}
        alt=""
      />
    </>
  );
}

export default Scrollup;
