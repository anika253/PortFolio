import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import profileImage from "../../assets/images/git profile.jpg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  const handleResumeClick = e => {
    e.preventDefault();
    // Try multiple methods to ensure it works
    const urls = [
      "https://drive.google.com/file/d/1TeIx9KczfblM2Fvfku5ocYCXaLCixsRT/preview",
      `https://docs.google.com/viewer?url=${encodeURIComponent(
        "https://drive.google.com/uc?export=download&id=1TeIx9KczfblM2Fvfku5ocYCXaLCixsRT"
      )}`,
      "https://drive.google.com/file/d/1TeIx9KczfblM2Fvfku5ocYCXaLCixsRT/view?usp=drivesdk"
    ];

    // Try each URL until one works
    const newWindow = window.open("", "_blank", "noopener,noreferrer");
    for (const url of urls) {
      try {
        newWindow.location.href = url;
        break;
      } catch (e) {
        console.error(`Failed with URL: ${url}`, e);
      }
    }
  };

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <a
                  href="https://drive.google.com/file/d/1TeIx9KczfblM2Fvfku5ocYCXaLCixsRT/preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-link"
                >
                  <Button text="View my resume" className="resume-button" />
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Anika Sharma"
              src={profileImage}
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
