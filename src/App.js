import { useEffect, useState } from "react";
import "./App.css";

const date = new Date().toLocaleTimeString();

function App() {
  const [time, setTime] = useState(date);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);

  return <div>{time}</div>;
}

export default App;
