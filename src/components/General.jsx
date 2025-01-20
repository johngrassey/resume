function General({ general, onChange }) {
  return (
    <>
      <h2>General Information</h2>
      <input
        type="text"
        placeholder={general[0]}
        onChange={(e) => onChange(e, 0)}
      />
      <input
        type="text"
        placeholder={general[1]}
        onChange={(e) => onChange(e, 1)}
      />
      <input
        type="text"
        placeholder={general[2]}
        onChange={(e) => onChange(e, 2)}
      />
    </>
  );
}

export default General;
