import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import planets from "./planets.js";
function App() {
  const [data, setData] = useState(0);
  return (
    <div className="container-fluid all-bg p-0">
      <Header
        selectData={(e) => {
          setData(e);
        }}
      />
      <div className="container">
        <Card info={planets[data]} />
      </div>

      <footer>
        Developed by Emir Tanir - Used ReactJS
      </footer>
    </div>
  );
}

export default App;
