function Resume({ general, profile }) {
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
    </div>
  );
}

export default Resume;
