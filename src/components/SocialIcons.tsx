import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    // Temporarily disabled for testing - element #social interactions disabled
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Sameer8810" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/sameer-khan-621ba422b/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com/SameerBytes" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/_sameer4u_?igsh=cTFpMjN5bms3eGRp" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
