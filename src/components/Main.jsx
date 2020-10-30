import React, { Component } from "react";
import { connect } from "react-redux";
import ToolBox from "./ToolBox";
import ControlPanel from "./ControlPanel";
import CodeArea from "./CodeArea";
import BlocklyArea from "./BlocklyArea";
import "../css/Blockly.css";

import { updateWorkSpace } from "../store/actions";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <ControlPanel />
        <div className="main-content">
          <BlocklyArea />
          <CodeArea />
          <ToolBox />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  workSpaceState: state.workSpaceState,
});

const mapDispatchToProps = (dispatch) => ({
  updateWorkSpace: (workSpace) => dispatch(updateWorkSpace(workSpace)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
