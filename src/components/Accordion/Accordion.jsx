import { useState } from "react";

import "./Accordion.css";

function Accordion(props) {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="accordion">
      <button 
      className="accordion-title"
      onClick={() => setIsActive((prev) => !prev)}>
        + {props.title}
      </button>
      {isActive && <div className="accordion-content">{props.children}</div>}
    </div>
  );
}

export default Accordion;
