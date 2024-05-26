import { useState } from "react";

export default function Roi({ inputData, curr, sd }) {
  const [mess, setMess] = useState();
  const inputNumber = parseFloat(inputData) || 0; // Convert inputData to a number, default to 0 if NaN
  const roi = (sd * inputNumber * 1.002).toFixed(2);
  const message = () => {
    setMess(`You have successfully Invested ${inputData} ${curr}`);
  };
  return (
    <div>
      <h3
        style={{
          color: "grey",
          display: "flex",
          flexDirection: "row-reverse",
          marginRight: "17vw",
          paddingTop: "6vh",
        }}
      >
        ROI at current rates
      </h3>
      <div
        style={{
          background: "lightgray",
          marginLeft: "15vw",
          marginRight: "15vw",
          width: "66vw",
          height: "40px",
          paddingBottom: "30px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              display: "inline-block",
              paddingTop: "8px",
              paddingLeft: "20px",
            }}
          >
            Total Amount after {sd} Days
          </p>
          <p
            style={{
              display: "inline-block",
              paddingRight: "20px",
              fontSize: "20px",
            }}
          >
            {roi} {curr}
          </p>
        </div>
      </div>
      <h6
        style={{
          color: "grey",
          display: "flex",
          flexDirection: "row-reverse",
          marginRight: "17vw",
        }}
      >
        ~ 0.2% / day
      </h6>
      <div className="btnn">
        <div>
          <button className="bt" onClick={message}>
            Apply
          </button>
        </div>
        <div>
          <button className="bt">Cancel</button>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: "center", color: "yellow", marginTop: "30px" }}>
          {mess}
        </h2>
      </div>
    </div>
  );
}
