import Button from "./Button";

function Education({ education, onEducationChange, addEducation }) {
  return (
    <>
      <h2>EDUCATION</h2>
      {education.map((education, index) => {
        return (
          <div key={index} className="educationsection">
            <label htmlFor={`school-${index}`}>SCHOOL</label>
            <input
              type="text"
              placeholder={education.school}
              id={`school-${index}`}
              name="school"
              onChange={(e) => onEducationChange(e, index)}
            />
            <label htmlFor={`degree-${index}`}>DEGREE</label>
            <input
              type="text"
              placeholder={education.degree}
              id={`degree-${index}`}
              name="degree"
              onChange={(e) => onEducationChange(e, index)}
            />
            <div className="formcolumns">
              <div className="formfield">
                <label htmlFor={`startDate-${index}`}>START DATE</label>
                <input
                  type="date"
                  placeholder={education.startDate}
                  id={`startDate-${index}`}
                  name="startDate"
                  onChange={(e) => onEducationChange(e, index)}
                />
              </div>
              <div className="formfield">
                <label htmlFor={`endDate-${index}`}>END DATE</label>
                <input
                  type="date"
                  placeholder={education.endDate}
                  id={`endDate-${index}`}
                  name="endDate"
                  onChange={(e) => onEducationChange(e, index)}
                />
              </div>
            </div>
          </div>
        );
      })}
      <Button label="Add Education" handler={addEducation} />
    </>
  );
}

export default Education;
