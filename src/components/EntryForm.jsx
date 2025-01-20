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
}) {
  return (
    <div className="entryform;">
      <h1>Enter Your Information</h1>
      <General general={general} onGeneralChange={onGeneralChange} />
      <Profile profile={profile} onProfileChange={onProfileChange} />
      <WorkExperience
        workExperience={workExperience}
        onWorkExperienceChange={onWorkExperienceChange}
      />
      <Education education={education} onEducationChange={onEducationChange} />
    </div>
  );
}

export default EntryForm;
