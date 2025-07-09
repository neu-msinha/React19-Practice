import { useState } from "react";

const App = () => {

  let [listItems, setListItems] = useState({});
  let [inputValue, setInputValue] = useState("");

  const getInputValue = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    setInputValue(inputValue)
  }

  return (
    <>
      <input onChange={getInputValue}></input>
      <button onClick={() => setListItems(prev => {
                const newList = { ...prev, [`item${Object.keys(prev).length + 1}`]: `${inputValue}` };
                return newList;
              })}>Add</button>

      <ul>
        {Object.keys(listItems).length === 0 ? (
          <li>No items in the list</li>
        ) : (
          Object.entries(listItems).map(([key, value]) => (
            <li key={key}>
              {value}
              &nbsp;
              &nbsp;
              <button onClick={() => setListItems(prev => {
                const newList = { ...prev };
                delete newList[key];
                return newList;
              })}>Delete</button>

            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default App;