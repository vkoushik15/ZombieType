import React, { useContext, useState } from "react";

export const TimeContext = React.createContext({});
function Timeprovider({ children }) {
  const [time, setTime] = useState(60);
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  return (
    <TimeContext.Provider
      value={{ time, isOpen, timeLeft, setTime, setIsOpen, setTimeLeft }}
    >
      {children}
    </TimeContext.Provider>
  );
}

const useTime = () => {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error("useUser miust be within Userprovider.");
  }
  return context;
};

export { Timeprovider, useTime };
