function WorkExperience({ workExperience, onWorkExperienceChange }) {
  return (
    <>
      <h2>Work Experience</h2>
      <input
        type="text"
        placeholder={workExperience[0].company}
        name="company"
        onChange={(e) => onWorkExperienceChange(e, 0)}
      />
      <input
        type="text"
        placeholder={workExperience[0].position}
        name="position"
        onChange={(e) => onWorkExperienceChange(e, 0)}
      />
      <textarea
        placeholder={workExperience[0].responsibilities}
        name="responsibilities"
        onChange={(e) => onWorkExperienceChange(e, 0)}
      />
      <input
        type="date"
        placeholder={workExperience[0].startDate}
        name="startDate"
        onChange={(e) => onWorkExperienceChange(e, 0)}
      />
      <input
        type="date"
        placeholder={workExperience[0].endDate}
        name="endDate"
        onChange={(e) => onWorkExperienceChange(e, 0)}
      />
    </>
  );
}

export default WorkExperience;
