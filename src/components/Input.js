import "./Input.css";
import { NumericFormat } from "react-number-format";

const Input = ({ text, result }) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        <NumericFormat
          className="result"
          displayType="text"
          value={result}
          allowLeadingZeros
          thousandSeparator=","
          decimalScale={4}
        />
        
        {/* <h1>{result}</h1> */}
      </div>
      <div className="text">
       
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Input;
