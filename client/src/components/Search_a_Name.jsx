import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../style/serachName.css";
library.add(faXmark, faSearch);
const Search_a_Name = () => {
  return (
    <div className="search-name-container">
      <div className="search-container">
        <div className="search-icon">
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            className="btn-x btn"
            style={{ color: "#000000" }}
          />
        </div>
        <div className="search-bar">
          <input type="text" name="search-value" id="" />
        </div>
        <div className="clear-icon">
          <FontAwesomeIcon
            icon={faSearch}
            size="2x"
            className="btn-search btn"
            style={{ color: "#000000" }}
          />
        </div>
      </div>
      <div className="name-container">
        <div className="side-profile-img">
            <img src="../assests/img/test_profile.jpeg" alt="" />
        </div>
        <div className="side-name-time"></div>
      </div>
    </div>
  );
};

export default Search_a_Name;
