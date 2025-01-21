function General({ onGeneralChange }) {
  return (
    <>
      <h2>GENERAL INFORMATION</h2>
      <div className="formcolumns">
        <div className="formfield">
          <label htmlFor="firstname">FIRST NAME</label>
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            onChange={(e) => onGeneralChange(e, 0)}
          />
        </div>
        <div className="formfield">
          <label htmlFor="lastname">LAST NAME</label>
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            onChange={(e) => onGeneralChange(e, 1)}
          />
        </div>
      </div>
      <div className="formfield">
        <label htmlFor="profession">PROFESSIONAL TITLE</label>
        <input
          type="text"
          id="profession"
          placeholder="Professional Title"
          onChange={(e) => onGeneralChange(e, 2)}
        />
      </div>
    </>
  );
}

export default General;
