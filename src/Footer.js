import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://4.bp.blogspot.com/-l5iP5lR_sSI/V3qc5rBpLSI/AAAAAAAAED4/j4IlEaPSv0MYMNMEeKfltqi9aZtjElClwCK4B/s1600/edtech-logo.png"
          alt=""
        />
        <p>Stay connected</p>

        <div className="footer__Icons" style={{ display: "flex", gap: "2rem" }}>
          <InstagramIcon />
          <TelegramIcon />
          <YouTubeIcon />
          <WhatsAppIcon />
          <PhoneIcon />
        </div>
      </div>
      <div className="footer__right">
        <div className="footer1">
          <h1>Facilities provided</h1>
          <h4>Learning</h4>
          <h4> Activities</h4>
          <h4>Quiz</h4>
        </div>
        <div className="footer2">
          <h1>Facilities provided</h1>
          <h4>Exams</h4>
          <h4>Online Lectures</h4>
          <h4>Courses</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
