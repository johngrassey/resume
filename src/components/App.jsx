import { useState } from "react";
import EntryForm from "./EntryForm";
import Resume from "./Resume";

function App() {
  const [general, setGeneral] = useState([
    "First Name",
    "Last Name",
    "Professional Title",
  ]);

  const [profile, setProfile] = useState("Profile");

  const [education, setEducation] = useState([
    {
      school: "School",
      degree: "Degree",
      startDate: "Start Date",
      endDate: "End Date",
    },
  ]);

  const [workExperience, setWorkExperience] = useState([
    {
      company: "Company",
      position: "Position",
      responsibilities: "responsibilities",
      startDate: "Start Date",
      endDate: "End Date",
    },
  ]);

  function handleGeneralChange(e, index) {
    const newGeneral = [...general];
    newGeneral[index] = e.target.value;
    setGeneral(newGeneral);
  }

  function handleProfileChange(e) {
    setProfile(e.target.value);
  }

  function handleEducationChange(e, index) {
    const newEducation = [...education];
    newEducation[index][e.target.name] = e.target.value;
    setEducation(newEducation);
  }

  function handleWorkExperienceChange(e, index) {
    const newWorkExperience = [...workExperience];
    newWorkExperience[index][e.target.name] = e.target.value;
    setWorkExperience(newWorkExperience);
  }

  return (
    <div className="mainbody">
      <EntryForm
        general={general}
        profile={profile}
        education={education}
        workExperience={workExperience}
        onGeneralChange={handleGeneralChange}
        onProfileChange={handleProfileChange}
        onEducationChange={handleEducationChange}
        onWorkExperienceChange={handleWorkExperienceChange}
      />
      <Resume
        general={general}
        profile={profile}
        education={education}
        workExperience={workExperience}
      />
    </div>
  );
}

export default App;
