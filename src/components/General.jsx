function General({ general, onGeneralChange }) {
  return (
    <>
      <h2>General Information</h2>
      <input
        type="text"
        placeholder={general[0]}
        onChange={(e) => onGeneralChange(e, 0)}
      />
      <input
        type="text"
        placeholder={general[1]}
        onChange={(e) => onGeneralChange(e, 1)}
      />
      <input
        type="text"
        placeholder={general[2]}
        onChange={(e) => onGeneralChange(e, 2)}
      />
    </>
  );
}

export default General;
