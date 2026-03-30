import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <h1>User Profiles</h1>


    {/* Render ProfileCard component */}
    {/* Here we pass data using props */}

      <ProfileCard
        name="Aditya Sharma"
        bio="Frontend developer passionate about React and UI design."
        image="https://i.pravatar.cc/200?img=3"
      />

      <ProfileCard
        name="Riya Patel"
        bio="Full-stack developer who enjoys building scalable apps."
        image="https://i.pravatar.cc/200?img=5"
      />

    </div>
  ); 
}

export default App;