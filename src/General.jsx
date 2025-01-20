function General({ general }) {
  return (
    <>
      <h2>General Information</h2>
      <input type="text" placeholder={general[0]} />
      <input type="text" placeholder={general[1]} />
      <input type="text" placeholder={general[2]} />
    </>
  );
}

export default General;
