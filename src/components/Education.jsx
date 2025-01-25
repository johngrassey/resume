import Button from "./Button";

function Education({ education, onEducationChange }) {
  return (
    <>
      <h2>EDUCATION</h2>
      <label htmlFor="school">SCHOOL</label>
      <input
        type="text"
        placeholder={education[0].school}
        id="school"
        name="school"
        onChange={(e) => onEducationChange(e, 0)}
      />
      <label htmlFor="degree">DEGREE</label>
      <input
        type="text"
        placeholder={education[0].degree}
        id="degree"
        name="degree"
        onChange={(e) => onEducationChange(e, 0)}
      />
      <div className="formcolumns">
        <div className="formfield">
          <label htmlFor="startDate">START DATE</label>
          <input
            type="date"
            placeholder={education[0].startDate}
            id="startDate"
            name="startDate"
            onChange={(e) => onEducationChange(e, 0)}
          />
        </div>
        <div className="formfield">
          <label htmlFor="endDate">END DATE</label>
          <input
            type="date"
            placeholder={education[0].endDate}
            id="endDate"
            name="endDate"
            onChange={(e) => onEducationChange(e, 0)}
          />
        </div>
      </div>
      <Button label="Add Education" />
    </>
  );
}

export default Education;
