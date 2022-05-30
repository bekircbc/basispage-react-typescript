import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  setCount(23);
  return <div className="App">Hello </div>;
}

export default App;
