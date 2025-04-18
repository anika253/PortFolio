import React from "react";
import {Fade} from "react-reveal";
import "./CodingProfiles.css";

export default function CodingProfiles({codingProfiles}) {
  if (!codingProfiles || !codingProfiles.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="coding">
        <div className="coding-header">
          <h1 className="coding-header-title">{codingProfiles.heading}</h1>
          <p className="subTitle coding-header-subtitle">
            {codingProfiles.subHeading}
          </p>
        </div>
        <div className="coding-main-div">
          {codingProfiles.profiles.map((profile, i) => (
            <a
              key={i}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="coding-profile-card" // Changed to match CSS
            >
              <div className="coding-profile">
                <img
                  className="coding-profile-icon"
                  src={profile.icon}
                  alt={profile.platform}
                />
                <h2 className="coding-platform-name">{profile.platform}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Fade>
  );
}
