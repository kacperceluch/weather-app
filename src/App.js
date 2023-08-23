import "./styles.css";
import Search from "./components/Search";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({});

  const findData = (text, state) => {
    setData(text);
    setActive(state);
  }

  const handleClick = () => {
    setActive(false);
    setData({});
  }

  return (
    <div className="app">
      <div className="wrapper">
        <div className="header">
          {(active === false)
            ? <span></span>
            : <span onClick={handleClick} className="material-symbols-outlined">arrow_back</span>
            }
          <h2 className="title">Weather App</h2>
        </div>
        {(active === false)
          ? <Search    
                findData={findData}
              />
          : <Card data={data}/> }
      </div>
    </div>
  );
}

export default App;
