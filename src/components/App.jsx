import { useState } from "react";
import "../styles/App.css";
import EntryForm from "./EntryForm";
import Resume from "./Resume";

function App() {
  const [general, setGeneral] = useState([
    "First Name",
    "Last Name",
    "Professional Title",
  ]);

  function handleGeneralChange(e, index) {
    const newGeneral = [...general];
    newGeneral[index] = e.target.value;
    setGeneral(newGeneral);
  }

  return (
    <div className="mainbody">
      <EntryForm general={general} onChange={handleGeneralChange} />
      <Resume general={general} />
    </div>
  );
}

export default App;
