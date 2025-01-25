import { useState } from "react";
import EntryForm from "./EntryForm";
import Resume from "./Resume";

function App() {
  const [general, setGeneral] = useState({
    firstname: "First",
    lastname: "Last",
    profession: "Professional Title",
  });

  const [profile, setProfile] = useState("Profile");

  class Education {
    constructor(school, degree, startDate, endDate) {
      this.school = school;
      this.degree = degree;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  }

  class WorkExperience {
    constructor(company, position, responsibilities, startDate, endDate) {
      this.company = company;
      this.position = position;
      this.responsibilities = responsibilities;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  }

  const [education, setEducation] = useState([
    new Education("School", "Degree", "Start Date", "End Date"),
  ]);

  const [workExperience, setWorkExperience] = useState([
    new WorkExperience(
      "Company",
      "Position",
      "Responsibilities",
      "Start Date",
      "End Date"
    ),
  ]);

  function addEducation() {
    setEducation([
      ...education,
      new Education("School", "Degree", "Start Date", "End Date"),
    ]);
  }

  function addWorkExperience() {
    setWorkExperience([
      ...workExperience,
      new WorkExperience(
        "Company",
        "Position",
        "Responsibilities",
        "Start Date",
        "End Date"
      ),
    ]);
  }

  function handleGeneralChange(e) {
    const newGeneral = { ...general };
    newGeneral[e.target.id] = e.target.value;
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
    const { name, value } = e.target;
    const newWorkExperience = [...workExperience];
    newWorkExperience[index][name] = value;
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
        addEducation={addEducation}
        addWorkExperience={addWorkExperience}
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
