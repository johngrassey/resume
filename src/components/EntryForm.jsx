import General from "./General";
import Profile from "./Profile";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

function EntryForm({
  general,
  profile,
  education,
  workExperience,
  onGeneralChange,
  onProfileChange,
  onEducationChange,
  onWorkExperienceChange,
  addWorkExperience,
  addEducation,
}) {
  return (
    <form action="" method="post">
      <General general={general} onGeneralChange={onGeneralChange} />
      <Profile profile={profile} onProfileChange={onProfileChange} />
      <WorkExperience
        workExperience={workExperience}
        onWorkExperienceChange={onWorkExperienceChange}
        addWorkExperience={addWorkExperience}
      />
      <Education
        education={education}
        onEducationChange={onEducationChange}
        addEducation={addEducation}
      />
    </form>
  );
}

export default EntryForm;
