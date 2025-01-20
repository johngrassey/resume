function Resume({ general }) {
  return (
    <div className="resume">
      <h1>
        {general[0]} {general[1]}
      </h1>
      <h2>{general[2]}</h2>
    </div>
  );
}

export default Resume;
