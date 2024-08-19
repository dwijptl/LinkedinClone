import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.svgrepo.com/show/75820/linkedin.svg" alt=""></img>

        <div className="header__search">
          <SearchIcon />
          <input type="text"></input>
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
