import General from "./General";

function EntryBlock({ general }) {
  return (
    <div className="entryblock">
      <h1>Entry Block</h1>
      <General general={general} />
    </div>
  );
}

export default EntryBlock;
