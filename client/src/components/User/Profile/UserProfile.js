import React, { useEffect, useState } from "react";
// import "./App.css";

function UserProfile() {
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
        throw new Error("Failed to fetch user profile");
      })
      .then((userProfile) => {
        if (
          userProfile.client_image &&
          userProfile.client_name &&
          userProfile.email &&
          userProfile.id
        ) {
          setUserProfile(userProfile);
        } else {
          throw new Error("Incorrect data format for user profile");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
console.log(userProfile)
  return (
<div className="mainprofilebox">
<div className="flex-container space-between">
        {userProfile.client_image && userProfile.client_name && userProfile.email ? (
      <div className="col card">
        <div className="img-placeholder">
          <img src={userProfile.client_image} alt="" />
        </div>
      <div className="profile-details">
      <h3>Welcome</h3>
      <p><i className="fa-solid fa-user"></i> name: {userProfile.client_name}</p>
      <p><i className="fa-solid fa-paper-plane"></i><span>Email:</span> {userProfile.email}</p>
      <p><i className="fa-solid fa-location-dot"></i> Tickets Bought: {userProfile.bought_tickets}</p>

    </div>
      </div>
        ) : (
          <p>Loading...</p>
        )}
    </div>
</div>
  );
}

export default UserProfile;
