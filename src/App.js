import Button from "./components/Button";
import Input from "./components/Input";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input />
        <div className="row">
          <Button symbol="7" />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button symbol="/" color="#F39222" />
        </div>
        <div className="row">
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="*" color="#F39222" />
        </div>
        <div className="row">
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="+" color="#F39222" />
        </div>
        <div className="row">
          <Button symbol="clear" color="#CECECE" />
          <Button symbol="0" />
          <Button symbol="." color="#CECECE" />
          <Button symbol="-" color="#F39222" />
        </div>
        <div className="row">
          <Button symbol="=" color="#F39222" />
        </div>
      </div>
    </div>
  );
}

export default App;
