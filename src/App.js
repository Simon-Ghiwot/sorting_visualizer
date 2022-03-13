import { useEffect, useReducer, useState } from "react";
import Button from "./Components/Button";
import ToolTip from "./Components/ToolTip";
import DataType from "./Components/DataType";
import reducer from "./reducer";
import RandomArray from "./RandomArray";
import { TypeOfData } from "./data";
import "./style.css";

const App = () => {
  const defualtState = {
    bars: [],
  };

  const [state, dispatch] = useReducer(reducer, defualtState);
  const [range, setRange] = useState(80);
  const [speed, setSpeed] = useState(10);
  const [width, setWidth] = useState(7);
  const [menu, setMenu] = useState(false);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [algorithm, setAlgorithm] = useState("");
  const [dataToBeSorted, setDataToBeSorted] = useState("Random");

  useEffect(() => {
    const bars = RandomArray(range, dataToBeSorted);
    dispatch({ type: "Bar", payload: bars });
  }, [range, dataToBeSorted]);
  const handleRange = (e) => {
    setRange(Number(e.target.value));
    if (Number(e.target.value) <= 40) setWidth(14);
    if (Number(e.target.value) > 40) setWidth(7);
  };
  const handleMouseHover = () => {
    if (algorithm) setIsToolTipOpen(true);
  };
  const handleMouseLeave = () => {
    if (algorithm) setIsToolTipOpen(false);
  };
  const generateArray = () => {
    const bars = RandomArray(range, dataToBeSorted);
    dispatch({ type: "Bar", payload: bars });
  };
  return (
    <div>
      {isToolTipOpen && <ToolTip algorithm={algorithm} menu={menu} />}
      <nav className="navigator">
        <div className="right-nav">
          <button onClick={generateArray}>New Bars</button>
          <div>
            <label htmlFor="range">Size</label>
            <input
              className="size"
              type="range"
              id="range"
              min="10"
              max="150"
              value={range}
              onChange={handleRange}
            />
          </div>
          <div>
            <label htmlFor="speed">Speed</label>
            <input
              className="size"
              type="range"
              id="speed"
              min="0"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
            />
          </div>
        </div>
        <div className={`${menu ? "nav-bar-button active" : "nav-bar-button"}`}>
          <ul>
            <li>
              <Button
                name="Bubble"
                dispatch={dispatch}
                algorithm={setAlgorithm}
                setIsToolTipOpen={setIsToolTipOpen}
              />
            </li>
            <li>
              <Button
                name="Selection"
                dispatch={dispatch}
                algorithm={setAlgorithm}
                setIsToolTipOpen={setIsToolTipOpen}
              />
            </li>
            <li>
              <Button
                name="Insertion"
                dispatch={dispatch}
                algorithm={setAlgorithm}
                setIsToolTipOpen={setIsToolTipOpen}
              />
            </li>
            <li>
              <Button
                name="Heap"
                dispatch={dispatch}
                algorithm={setAlgorithm}
                setIsToolTipOpen={setIsToolTipOpen}
              />
            </li>
            <li>
              <Button
                name="Merge"
                dispatch={dispatch}
                algorithm={setAlgorithm}
                setIsToolTipOpen={setIsToolTipOpen}
              />
            </li>
            <li>
              <Button
                name="Quick"
                dispatch={dispatch}
                algorithm={setAlgorithm}
                setIsToolTipOpen={setIsToolTipOpen}
              />
            </li>
          </ul>
        </div>
        <div onClick={() => setMenu(!menu)} className={"toggle "}>
          <span className="bar-toggle"></span>
          <span className="bar-toggle"></span>
          <span className="bar-toggle"></span>
        </div>
      </nav>
      <div
        className="bar-container"
        onMouseOver={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      >
        {state.bars.map((bar, index) => {
          return (
            <div
              key={index}
              className="bars"
              style={{
                height: `${bar}px`,
                width: `${width}px`,
              }}
            ></div>
          );
        })}
      </div>
      <div className="bottom-nav">
        {TypeOfData.map((data) => {
          return (
            <DataType
              name={data.name}
              setDataToBeSorted={setDataToBeSorted}
              key={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
