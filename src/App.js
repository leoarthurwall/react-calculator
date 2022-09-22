import { useState } from "react";


import Button from "./components/Button";
import Input from "./components/Input";
import "./index.css";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (value) => {
    setText((text) => [...text, value + " "])
  }
  
  const resetInput = () => {
    setText("")
    setResult("")
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Button symbol="7" handleClick={addToText} />
          <Button symbol="8" handleClick={addToText} />
          <Button symbol="9" handleClick={addToText} />
          <Button symbol="/" color="#F39222" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText} />
          <Button symbol="5" handleClick={addToText} />
          <Button symbol="6" handleClick={addToText} />
          <Button symbol="*" color="#F39222" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText} />
          <Button symbol="2" handleClick={addToText} />
          <Button symbol="3" handleClick={addToText} />
          <Button symbol="+" color="#F39222" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="C" color="#CECECC" handleClick={resetInput}/>
          <Button symbol="0" handleClick={addToText} />
          <Button symbol="." color="#CECECC" handleClick={addToText} />
          <Button symbol="-" color="#F39222" handleClick={addToText} />
        </div>
        <div className="row">
          <Button symbol="=" color="#F39222" />
        </div>
      </div>
    </div>
  );
}

export default App;
