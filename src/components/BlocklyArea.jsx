import React, { Component } from "react";
import { connect } from "react-redux";
import Blockly from "node-blockly/browser";

import { updateWorkSpace } from "../store/actions";

import "../css/ControlPanel.css";

class BlocklyArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Promise.all([this.renderBlocklyArea()]).then(() => {
      this.resizeBlocklyArea();
    });
  }

  renderBlocklyArea() {
    let blocklyDiv = document.getElementById("blocklyDiv");
    let workSpace = this.props.workSpaceState.workSpace;
    workSpace = Blockly.inject(blocklyDiv, {
      toolbox: document.getElementById("toolbox"),
    });
    workSpace.addChangeListener(this.updateCode);
    this.props.updateWorkSpace(workSpace);
  }

  resizeBlocklyArea() {
    let blocklyArea = document.getElementById("blocklyArea");
    let blocklyDiv = document.getElementById("blocklyDiv");
    let workSpace = this.props.workSpaceState.workSpace;
    let onresize = function () {
      let element = blocklyArea;
      let x = 0;
      let y = 0;
      do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
      } while (element);
      blocklyDiv.style.left = x + "px";
      blocklyDiv.style.top = y + "px";
      blocklyDiv.style.width = blocklyArea.offsetWidth + "px";
      blocklyDiv.style.height = blocklyArea.offsetHeight + "px";
      Blockly.svgResize(workSpace);
    };
    window.addEventListener("resize", onresize, false);
    onresize();
    Blockly.svgResize(workSpace);
  }

  render() {
    return (
      <div id="blocklyArea">
        <div id="blocklyDiv"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlocklyArea);
