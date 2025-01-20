import { useState } from "react";
import "./App.css";
import EntryBlock from "./EntryBlock";

function App() {
  const [general, setGeneral] = useState([
    "First Name",
    "Last Name",
    "Professional Title",
  ]);

  return (
    <>
      <EntryBlock general={general} />
    </>
  );
}

export default App;
