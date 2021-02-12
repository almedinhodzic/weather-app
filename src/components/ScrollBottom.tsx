import React from "react";

type Props = {
  goToWeekSection?: () => void;
};

const ScrollBottom: React.FC<Props> = ({ goToWeekSection }) => {
  return (
    <div className="scroll-container">
      <h3>Go To Next 7 Days Forecast</h3>
      <div onClick={goToWeekSection} className="scroll-to-bottom">
        <i className="icon fas fa-arrow-down"></i>
      </div>
    </div>
  );
};

export default ScrollBottom;
