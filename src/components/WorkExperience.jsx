import Button from "./Button";

function WorkExperience({
  workExperience,
  onWorkExperienceChange,
  addWorkExperience,
}) {
  return (
    <>
      <h2>WORK EXPERIENCE</h2>
      {workExperience.map((work, index) => {
        return (
          <div className="worksection" key={index}>
            <div className="formcolumns">
              <div className="formfield">
                <label htmlFor={`company-${index}`}>COMPANY</label>
                <input
                  type="text"
                  placeholder={work.company}
                  id={`company-${index}`}
                  name="company"
                  onChange={(e) => onWorkExperienceChange(e, index)}
                />
              </div>
              <div className="formfield">
                <label htmlFor={`position-${index}`}>POSITION</label>
                <input
                  type="text"
                  placeholder={work.position}
                  id={`position-${index}`}
                  name="position"
                  onChange={(e) => onWorkExperienceChange(e, index)}
                />
              </div>
            </div>
            <div className="formfield">
              <label htmlFor={`responsibilities-${index}`}>
                RESPONSIBILITIES
              </label>
              <textarea
                placeholder={work.responsibilities}
                id={`responsibilities-${index}`}
                name="responsibilities"
                onChange={(e) => onWorkExperienceChange(e, index)}
              />
            </div>
            <div className="formcolumns">
              <div className="formfield">
                <label htmlFor={`startDate-${index}`}>START DATE</label>
                <input
                  type="date"
                  placeholder={work.startDate}
                  id={`startDate-${index}`}
                  name="startDate"
                  onChange={(e) => onWorkExperienceChange(e, index)}
                />
              </div>
              <div className="formfield">
                <label htmlFor={`endDate-${index}`}>END DATE</label>
                <input
                  type="date"
                  placeholder={work.endDate}
                  id={`endDate-${index}`}
                  name="endDate"
                  onChange={(e) => onWorkExperienceChange(e, index)}
                />
              </div>
            </div>
          </div>
        );
      })}
      <Button label="Add Work Experience" handler={addWorkExperience} />
    </>
  );
}

export default WorkExperience;
