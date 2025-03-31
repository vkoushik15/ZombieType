import React, { useRef, useEffect } from "react";
import "./pop.css";
import { useTime } from "../context/timeContext";

function Pop() {
  const { setTime, setIsOpen, isOpen } = useTime();
  const popupRef = useRef(null);

  const handleSetTime = (selectedTime) => {
    setTime(selectedTime);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);
  

  return (
    <div className="popup">
      <div ref={popupRef} className="box">
        {[20, 30, 45, 60].map((t) => (
          <button
            key={t}
            style={{ backgroundColor: "white", color: "black", margin: "5px" }}
            onClick={() => handleSetTime(t)}
          >
            {t}s
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pop;
