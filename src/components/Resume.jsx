function Resume({ general, profile, education, workExperience }) {
  return (
    <div className="resume">
      <div className="resumeheader">
        <h1>
          {general[0].toUpperCase()}{" "}
          <span className="last">{general[1].toUpperCase()}</span>
        </h1>
        <h2>{general[2].toUpperCase()}</h2>
      </div>
      <div className="resumebody">
        <div className="resumeleft">
          <div className="resumeprofile">
            <h2>PROFILE</h2>
            <p>{profile}</p>
          </div>
          <div className="education">
            <h2>EDUCATION</h2>
            <p>{education[0].school}</p>
            <p>{education[0].degree}</p>
            <p>
              {education[0].startDate} - {education[0].endDate}
            </p>
          </div>
        </div>
        <div className="resumeright">
          <div className="workexperience">
            <h2>WORK EXPERIENCE</h2>
            <p>{workExperience[0].company}</p>
            <p>{workExperience[0].position}</p>
            <p>{workExperience[0].responsibilities}</p>
            <p>
              {workExperience[0].startDate} - {workExperience[0].endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
