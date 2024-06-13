import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div>
      {/* <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p></p>
        )}
      </div> */}
      <div>
        {currentProfile?.about ? (
          <>
            <h2>About</h2>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
    </div>
  );
};

export default ProfileBio;