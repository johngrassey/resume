import General from "./General";

function EntryForm({ general, onChange }) {
  return (
    <div className="entryform;">
      <h1>Entry Block</h1>
      <General general={general} onChange={onChange} />
    </div>
  );
}

export default EntryForm;
