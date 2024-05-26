import { useState } from "react";
export default function Nav({ inputData, setInputData, curr, setCurr }) {
  const balance = 15;
  const [bal, setBal] = useState();

  const [isclick, setIsClick] = useState(false);
  const chageBal = () => {
    setBal((bal) => (bal = `Balance : ${balance}$`));
    setIsClick((isclick) => (isclick ? false : true));
  };

  const changeCurr = (e) => {
    setCurr((curr) => (curr == "USD" ? "CAKE" : "USD"));
  };

  const handleChange = (e) => {
    setInputData((inputData) => (inputData = e.target.value));
  };

  return (
    <>
      <nav>
        <div className="logo">
          <h3>ROI Calculator</h3>
        </div>
        <div className="swap">
          <div className="cross">
            <p>X</p>
          </div>
          <div className="toggle">
            <p>Cake</p>
            <input type="checkbox" className="tog" onChange={changeCurr} />
            <p>USD</p>
          </div>
        </div>
      </nav>

      <div
        className="inputField"
        onChange={handleChange}
        style={{
          marginLeft: "15vw",
          background: "rgb(248, 245, 245)",
          marginRight: "15vw",
          width: "66vw",
          marginTop: "10px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "5px",
          }}
        >
          <p>{curr}</p>
        </div>

        <input
          type="text"
          className="inputField"
          placeholder={curr == "USD" ? "10$" : "3.36CAKE"}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <h6
          style={{
            color: "grey",
            marginRight: "16vw",
            width: "7%",
            display: "inline-block",
          }}
        >
          {isclick ? bal : "10$ = 3.36 CAKE"}
        </h6>
        <div className="balance">
          <div>
            <button
              className="a"
              onClick={chageBal}
              style={{ background: isclick ? "yellow" : "" }}
            >
              Curr Balance
            </button>
          </div>
          <div>
            <button className="a">$1000</button>
          </div>
          <div>
            <button className="a">$100</button>
          </div>
        </div>
      </div>
    </>
  );
}
