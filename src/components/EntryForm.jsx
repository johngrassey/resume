import General from "./General";
import Profile from "./Profile";
import Education from "./Education";

function EntryForm({
  general,
  profile,
  education,
  onGeneralChange,
  onProfileChange,
  onEducationChange,
}) {
  return (
    <div className="entryform;">
      <h1>Enter Your Information</h1>
      <General general={general} onGeneralChange={onGeneralChange} />
      <Profile profile={profile} onProfileChange={onProfileChange} />
      <Education education={education} onEducationChange={onEducationChange} />
    </div>
  );
}

export default EntryForm;
