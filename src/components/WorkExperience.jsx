function WorkExperience({ workExperience, onWorkExperienceChange }) {
  return (
    <>
      <h2>WORK EXPERIENCE</h2>
      <div className="formcolumns">
        <div className="formfield">
          <label htmlFor="company">COMPANY</label>
          <input
            type="text"
            placeholder={workExperience[0].company}
            id="company"
            name="company"
            onChange={(e) => onWorkExperienceChange(e, 0)}
          />
        </div>
        <div className="formfield">
          <label htmlFor="position">POSITION</label>
          <input
            type="text"
            placeholder={workExperience[0].position}
            id="position"
            name="position"
            onChange={(e) => onWorkExperienceChange(e, 0)}
          />
        </div>
      </div>
      <div className="formfield">
        <label htmlFor="responsibilities">RESPONSIBILITIES</label>
        <textarea
          placeholder={workExperience[0].responsibilities}
          id="responsibilities"
          name="responsibilities"
          onChange={(e) => onWorkExperienceChange(e, 0)}
        />
      </div>
      <div className="formcolumns">
        <div className="formfield">
          <label htmlFor="startDate">START DATE</label>
          <input
            type="date"
            placeholder={workExperience[0].startDate}
            id="startDate"
            name="startDate"
            onChange={(e) => onWorkExperienceChange(e, 0)}
          />
        </div>
        <div className="formfield">
          <label htmlFor="endDate">END DATE</label>
          <input
            type="date"
            placeholder={workExperience[0].endDate}
            id="endDate"
            name="endDate"
            onChange={(e) => onWorkExperienceChange(e, 0)}
          />
        </div>
      </div>
    </>
  );
}

export default WorkExperience;
