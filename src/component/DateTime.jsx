import { useEffect, useState } from "react";


const DateTIme = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      const day = now
        .toLocaleString("en-US", { weekday: "short" })
        .toLowerCase();

      const month = now
        .toLocaleString("en-US", { month: "short" })
        .toLowerCase();

      const date = now.getDate();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";

      hours = hours % 12 || 12;

      setTime(`${day} ${month} ${date} ${hours}:${minutes} ${ampm}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <p
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
    >
      {time}
    </p>
  );
};

export default DateTIme;
