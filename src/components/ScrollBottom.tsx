import React from "react";

const ScrollBottom: React.FC = () => {
  const scrollToBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  return (
    <div className="scroll-container">
      <h3>Go To Next 7 Forecast</h3>
      <div onClick={scrollToBottom} className="scroll-to-bottom">
        <i className="icon fas fa-arrow-down"></i>
      </div>
    </div>
  );
};

export default ScrollBottom;
