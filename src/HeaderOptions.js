import React from "react";
import "./Headeroptions.css";
function HeaderOptions({ Icon, name }) {
  return (
    <div>
      <div className="header__options">
        <Icon />
      </div>
      <p className="icon__name">{name}</p>
    </div>
  );
}

export default HeaderOptions;
