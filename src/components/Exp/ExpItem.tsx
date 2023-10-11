import React, { useState } from "react";
import "./Exp.css";
import { IconContext } from "react-icons";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

interface ExpItemProps {
  date: string;
  jobName: string;
  description: string;
  show: boolean;
}

const ExpItem: React.FC<ExpItemProps> = ({
  date,
  jobName,
  description,
  show,
}) => {
  const [showMore, setShowMore] = useState<boolean>(show);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="exp-item">
        <div className="exp-dot"></div>

        <div className="exp-date">
          <h2>{date}</h2>
        </div>
        <div className="more" onClick={handleShowMore}>
          <h3>{jobName}</h3>
          {!showMore ? (
            <button type="button">
              <IconContext.Provider value={{ color: "black", size: "26px" }}>
                <div>
                  <HiChevronDown />
                </div>
              </IconContext.Provider>
            </button>
          ) : (
            <button type="button">
              <IconContext.Provider value={{ color: "black", size: "26px" }}>
                <div>
                  <HiChevronUp />
                </div>
              </IconContext.Provider>
            </button>
          )}
        </div>
        {showMore && <p className="exp-description">{description}</p>}
      </div>
    </>
  );
};
export default ExpItem;
