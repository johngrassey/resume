import General from "./General";
import Profile from "./Profile";

function EntryForm({ general, profile, onGeneralChange, onProfileChange }) {
  return (
    <div className="entryform;">
      <h1>Entry Block</h1>
      <General general={general} onGeneralChange={onGeneralChange} />
      <Profile profile={profile} onProfileChange={onProfileChange} />
    </div>
  );
}

export default EntryForm;
