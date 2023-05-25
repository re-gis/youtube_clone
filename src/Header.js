import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Apps, VideoCall, NotificationsSharp } from "@mui/icons-material";
import "./Header.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState('')
  
  
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
          className="header_logo"
        />
        </Link>
      </div>

      <div className="header_input">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${searchInput}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCall className="header_icon" />
        <Apps className="header_icon" />
        <NotificationsSharp className="header_icon" />
        <Avatar className="header_icon" />
      </div>
    </div>
  );
};

export default Header;
