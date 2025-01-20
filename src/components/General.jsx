function General({ general, onGeneralChange }) {
  return (
    <>
      <h2>General Information</h2>
      <div className="formcolumns">
        <div className="formfield">
          <label htmlFor="firstname">FIRST NAME</label>
          <input
            type="text"
            id="firstname"
            placeholder={general[0]}
            onChange={(e) => onGeneralChange(e, 0)}
          />
        </div>
        <div className="formfield">
          <label htmlFor="lastname">LAST NAME</label>
          <input
            type="text"
            id="Last Name"
            placeholder={general[1]}
            onChange={(e) => onGeneralChange(e, 1)}
          />
        </div>
      </div>
      <div className="formfield">
        <label htmlFor="profession">PROFESSIONAL TITLE</label>
        <input
          type="text"
          id="profession"
          placeholder={general[2]}
          onChange={(e) => onGeneralChange(e, 2)}
        />
      </div>
    </>
  );
}

export default General;
