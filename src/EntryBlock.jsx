import General from "./General";

function EntryBlock({ general, onChange }) {
  return (
    <div className="entryblock">
      <h1>Entry Block</h1>
      <General general={general} onChange={onChange} />
    </div>
  );
}

export default EntryBlock;
