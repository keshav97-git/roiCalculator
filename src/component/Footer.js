import { useState } from "react";

export default function Footer() {
  const [isClick, setisClick] = useState(false);
  const showDetail = () => {
    setisClick((isClick) => (isClick ? false : true));
  };
  return (
    <div>
      <div>
        <h4 className="footer" onClick={showDetail}>
          {isClick ? "Hide  Details ↑ " : "Show  Details↓ "}
        </h4>
      </div>
      {isClick && (
        <li style={{ listStyle: "none", color: "grey", marginLeft: "20vw" }}>
          <ul> Calculated based on new Rates</ul>
          <ul>
            All fugures are estimates provided for your convenience only, and by
            no means represent guaranted returns.
          </ul>
        </li>
      )}
    </div>
  );
}
