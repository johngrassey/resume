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
            <p className="profile">{profile}</p>
          </div>
          <div className="education">
            <h2>EDUCATION</h2>
            {education.map((education, index) => (
              <div key={index} className="educationBlock">
                <p className="school">{education.school}</p>
                <p className="degree">{education.degree}</p>
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
                  <div className="workBlockHeader">
                    <p className="position">{work.position}</p>
                    <p className="workdates">
                      {work.startDate} - {work.endDate}
                    </p>
                  </div>
                  <p className="company">{work.company}</p>
                  <p className="responsibilities">{work.responsibilities}</p>
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
