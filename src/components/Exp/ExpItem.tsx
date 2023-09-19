import React, { useState } from "react";
import "./Exp.css";
import { IconContext } from "react-icons";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

interface ExpItemProps {
  date: string;
  jobName: string;
  description: string;
}

const ExpItem: React.FC<ExpItemProps> = ({ date, jobName, description }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="exp-item">
        <div className="exp-dot"></div>
        <div className="show-more" onClick={handleShowMore}>
          <h2>{date}</h2>
          {!showMore ? (<button type="button"><IconContext.Provider value={{ color: "black", size: "26px" }}>
              <div>
                <HiChevronDown />
              </div>
            </IconContext.Provider></button>) : (
              <button type="button"><IconContext.Provider value={{ color: "black", size: "26px" }}>
              <div>
                <HiChevronUp />
              </div>
            </IconContext.Provider></button>
            )}
        </div>
        <h3>{jobName}</h3>
        {showMore && <p>{description}</p>}
      </section>
    </>
  );
};
export default ExpItem;
