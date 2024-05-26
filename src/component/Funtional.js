import { useState } from "react";

export default function Functional({ giveDays, sd }) {
  return (
    <>
      <h3 style={{ marginLeft: "15vw" }}>TimeFrame</h3>
      <div className="timeFrame">
        {[1, 2, 3, 4, 5].map((day) => (
          <div key={day}>
            <button
              className="b"
              onClick={() => giveDays(day)}
              style={{ backgroundColor: sd === day ? "yellow" : "" }}
            >
              <b>
                {day} Day{day > 1 ? "s" : ""}
              </b>
            </button>
          </div>
        ))}
      </div>
      <div className="sTog">
        <div>
          <h3>Enable Accelerated AYP</h3>
        </div>
        <input type="checkbox" className="togg" />
      </div>
      <h3 style={{ color: "gray", marginTop: "70px", marginLeft: "15vw" }}>
        Select Tier{" "}
      </h3>
      <div className="timeFrame">
        {[1, 2, 3, 4, 5].map((tier) => (
          <div key={tier}>
            <button className="b">
              <b>Tier {tier}</b>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
