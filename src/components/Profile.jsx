function Profile({ profile, onProfileChange }) {
  return (
    <>
      <h2>Profile</h2>
      <textarea placeholder={profile} onChange={(e) => onProfileChange(e)} />
    </>
  );
}

export default Profile;
