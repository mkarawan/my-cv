import React from "react";
import { IconContext } from "react-icons";

import "./Skills.css";
const SkillsItem: React.FC<{icon: string }> = ({icon}) => {
  return (
    <>
                    <IconContext.Provider value={{ color: "white", size: "30px" }}>
                <div>
                </div>
              </IconContext.Provider>
              <p>Github</p>
    </>
  );
};
export default SkillsItem;
