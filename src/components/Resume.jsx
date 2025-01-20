function Resume({ general, profile, education, workExperience }) {
  return (
    <div className="resume">
      <div className="resumeheader">
        <h1>
          {general[0]} {general[1]}
        </h1>
        <h2>{general[2]}</h2>
      </div>
      <div className="resumeprofile">
        <h2>Profile</h2>
        <p>{profile}</p>
      </div>
      <div className="education">
        <h2>Education</h2>
        <p>{education[0].school}</p>
        <p>{education[0].degree}</p>
        <p>
          {education[0].startDate} - {education[0].endDate}
        </p>
      </div>
      <div className="workexperience">
        <h2>Work Experience</h2>
        <p>{workExperience[0].company}</p>
        <p>{workExperience[0].position}</p>
        <p>{workExperience[0].responsibilities}</p>
        <p>
          {workExperience[0].startDate} - {workExperience[0].endDate}
        </p>
      </div>
    </div>
  );
}

export default Resume;
