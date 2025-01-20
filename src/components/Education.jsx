function Education({ education, onEducationChange }) {
  return (
    <>
      <h2>Education</h2>
      <input
        type="text"
        placeholder={education[0].school}
        name="school"
        onChange={(e) => onEducationChange(e, 0)}
      />
      <input
        type="text"
        placeholder={education[0].degree}
        name="degree"
        onChange={(e) => onEducationChange(e, 0)}
      />
      <input
        type="date"
        placeholder={education[0].startDate}
        name="startDate"
        onChange={(e) => onEducationChange(e, 0)}
      />
      <input
        type="date"
        placeholder={education[0].endDate}
        name="endDate"
        onChange={(e) => onEducationChange(e, 0)}
      />
    </>
  );
}

export default Education;
