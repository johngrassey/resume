import { useState } from "react";
import "./App.css";
import EntryBlock from "./EntryBlock";

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
    <>
      <EntryBlock general={general} onChange={handleGeneralChange} />
    </>
  );
}

export default App;
