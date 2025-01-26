function Resume({ general, profile, education, workExperience }) {
  return (
    <div className="resume">
      <div className="resumeheader">
        <h1>
          {general.firstname.toUpperCase()}{" "}
          <span className="last">{general.lastname.toUpperCase()}</span>
        </h1>
        <h2>{general.profession.toUpperCase()}</h2>
      </div>
      <div className="resumebody">
        <div className="resumeleft">
          <div className="resumeprofile">
            <h2>PROFILE</h2>
            <p>{profile}</p>
          </div>
          <div className="education">
            <h2>EDUCATION</h2>
            {education.map((education, index) => (
              <div key={index} className="educationBlock">
                <p>{education.school}</p>
                <p>{education.degree}</p>
                <p>
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="resumeright">
          <div className="workexperience">
            <h2>WORK EXPERIENCE</h2>
            {workExperience.map((work, index) => {
              return (
                <div key={index} className="workExperienceBlock">
                  <p>{work.company}</p>
                  <p>{work.position}</p>
                  <p>{work.responsibilities}</p>
                  <p>
                    {work.startDate} - {work.endDate}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
