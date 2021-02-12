import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

const ScroolToTop: React.FC = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const scrollOnTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return <></>;
  }

  return (
    <div className="scrool-to-top" onClick={scrollOnTop}>
      <i className="icon fas fa-arrow-up"></i>
    </div>
  );
};

export default ScroolToTop;
