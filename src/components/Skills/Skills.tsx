import React, { useState } from "react";
const Skills: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="skills">
    <h1>Skills</h1>
        <p>html</p>
        <p>css</p>
        <p>react</p>

        {!showMore && (
          <button type="button" onClick={handleShowMore}>
            Show More
          </button>
        )}

        {showMore && (
          <div>
            <p>js</p>
            <p>ts</p>
            <p>git</p>
            <p>python</p>
            <p>rwd</p>
            <button type="button" onClick={handleShowMore}>
              Show Less
            </button>
          </div>
        )}
      </section>
  );
};
export default Skills;
