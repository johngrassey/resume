import { useState } from "react";
import EntryForm from "./EntryForm";
import Resume from "./Resume";
import { parse, format } from "date-fns";

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
    new Education(
      "School",
      "Degree",
      format(new Date(), "01/01/2025"),
      format(new Date(), "01/01/2025")
    ),
  ]);

  const [workExperience, setWorkExperience] = useState([
    new WorkExperience(
      "Company",
      "Position",
      "Responsibilities",
      format(new Date(), "01/01/2025"),
      format(new Date(), "01/01/2025")
    ),
  ]);

  function addEducation() {
    setEducation([
      ...education,
      new Education(
        "School",
        "Degree",
        format(new Date(), "01/01/2025"),
        format(new Date(), "01/01/2025")
      ),
    ]);
  }

  function addWorkExperience() {
    setWorkExperience([
      ...workExperience,
      new WorkExperience(
        "Company",
        "Position",
        "Responsibilities",
        format(new Date(), "01/01/2025"),
        format(new Date(), "01/01/2025")
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
    const { name, value } = e.target;
    const newEducation = [...education];

    if (name === "startDate" || name === "endDate") {
      const parsedDate = parse(value, "yyyy-MM-dd", new Date());
      newEducation[index][name] = format(parsedDate, "MM/dd/yyyy");
    } else {
      newEducation[index][name] = value;
    }

    setEducation(newEducation);
  }

  function handleWorkExperienceChange(e, index) {
    const { name, value } = e.target;
    const newWorkExperience = [...workExperience];
    if (name === "startDate" || name === "endDate") {
      const parsedDate = parse(value, "yyyy-MM-dd", new Date());
      newWorkExperience[index][name] = format(parsedDate, "MM/dd/yyyy");
    } else {
      newWorkExperience[index][name] = value;
    }
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
