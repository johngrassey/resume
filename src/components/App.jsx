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

  const [profile, setProfile] = useState("Profile");

  function handleGeneralChange(e, index) {
    const newGeneral = [...general];
    newGeneral[index] = e.target.value;
    setGeneral(newGeneral);
  }

  function handleProfileChange(e) {
    setProfile(e.target.value);
  }

  return (
    <div className="mainbody">
      <EntryForm
        general={general}
        profile={profile}
        onGeneralChange={handleGeneralChange}
        onProfileChange={handleProfileChange}
      />
      <Resume general={general} profile={profile} />
    </div>
  );
}

export default App;
