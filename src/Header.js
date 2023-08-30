import React from "react";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import InfoIcon from "@mui/icons-material/Info";
import CampaignIcon from "@mui/icons-material/Campaign";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://4.bp.blogspot.com/-l5iP5lR_sSI/V3qc5rBpLSI/AAAAAAAAED4/j4IlEaPSv0MYMNMEeKfltqi9aZtjElClwCK4B/s1600/edtech-logo.png"
          alt=""
        />
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} name="Home" />
        <HeaderOptions Icon={LocalLibraryIcon} name="Learning" />
        <HeaderOptions Icon={InfoIcon} name="About" />
        <HeaderOptions Icon={CampaignIcon} name="Announcements" />
      </div>
    </div>
  );
}

export default Header;
