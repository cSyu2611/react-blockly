import React, { Component } from "react";
import "../css/Header.css";

import _env from "../config/env";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>{_env.headerTitle}</h1>
      </div>
    );
  }
}

export default Header;
