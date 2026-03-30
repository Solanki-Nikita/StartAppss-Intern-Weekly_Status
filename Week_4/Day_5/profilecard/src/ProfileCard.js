import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="card">
      {/* Display user image */}
      {/* props.image receives the image URL from the parent component */}
      <img src={props.image} alt={props.name} className="profile-img" />

      {/* Display user name */}
      {/* props.name comes from the parent component */}
      <h2>{props.name}</h2>

      {/* Display user bio */}
      {/* props.bio also comes from the parent component */}
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;