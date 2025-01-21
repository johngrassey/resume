function Profile({ profile, onProfileChange }) {
  return (
    <>
      <h2>PROFILE</h2>
      <div className="formfield">
        <label htmlFor="profile">PROFILE</label>
        <textarea
          placeholder={profile}
          id="profile"
          onChange={(e) => onProfileChange(e)}
        />
      </div>
    </>
  );
}

export default Profile;
