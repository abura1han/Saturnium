import React, { useEffect, useState } from "react";
import { toRoman } from "roman-numerals";
const Clock = () => {
  const [second, setSecond] = useState<string | number>("xx");
  const [minutes, setMinutes] = useState<string | number>("xx");
  const [hours, setHours] = useState<string | number>("xx");

  // Update time
  useEffect(() => {
    const updateTime = setInterval(() => {
      const time = new Date(Date.now());
      setSecond(toRoman(time.getSeconds()));
      setMinutes(toRoman(time.getMinutes()));
      setHours(toRoman(time.getHours()));
    }, 1000);

    return () => {
      clearInterval(updateTime);
    };
  }, []);

  return (
    <div id="clock">
      <div>{second}</div>
      <span className="dot">:</span>
      <div> {minutes}</div>
      <span className="dot">:</span>
      <div>{hours}</div>
    </div>
  );
};

export default Clock;
