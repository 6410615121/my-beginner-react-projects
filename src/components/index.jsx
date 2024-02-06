//single selection
//multiple selection
import { useState } from "react";
import data from "./data.js";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentID) {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  }

  function handleMultiSelection(getCurrentID) {
    let cpymultiple = [...multiple];
    const findIndexOfCurrentID = cpymultiple.indexOf(getCurrentID);
    console.log(findIndexOfCurrentID);

    if (findIndexOfCurrentID === -1) cpymultiple.push(getCurrentID);
    else cpymultiple.splice(findIndexOfCurrentID, 1);

    setMultiple(cpymultiple);
  }
  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multi selection
      </button>

      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data Found!!</div>
        )}
      </div>
    </div>
  );
}
