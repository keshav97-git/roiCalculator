import Functional from "./component/Funtional";
import Nav from "./component/Nav";
import Roi from "./component/Roi";
import Footer from "./component/Footer";
import "./styles.css";
import { useState } from "react";

// import Submission from "./component/Submission";

export default function App() {
  const [inputData, setInputData] = useState();
  const [currency, setCurrency] = useState("CAKE");
  const [selectedDay, setSelectedDay] = useState(null);
  const givedays = (days) => {
    setSelectedDay(days);
  };
  return (
    <div className="App">
      <Nav
        inputData={inputData}
        setInputData={setInputData}
        curr={currency}
        setCurr={setCurrency}
      />
      <Functional giveDays={givedays} sd={selectedDay} ssd={setSelectedDay} />
      <Roi inputData={inputData} curr={currency} sd={selectedDay} />
      <Footer />

      {/* <Route path="/submitted" element={<Submission />} /> */}
    </div>
  );
}
