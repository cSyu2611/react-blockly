import React, { Component } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { updateParsedParam } from "../store/actions";

import "../css/ControlPanel.css";

class CodeArea extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="code-wrapper">
        <div className="code-wrapper-header">
          <FontAwesomeIcon icon="code" />
          結果
        </div>
        <pre>
          {this.props.apiResultState.apiResult.length !== 0
            ? Object.entries(
                this.props.apiResultState.apiResult[0]
              ).map((arr, index) => (
                <div key={index}>{arr[0] + ":" + arr[1]}</div>
              ))
            : null}
        </pre>
        {/* <pre className="code-area">
          prev:
          <br />
          機能: {this.state["api_select"]}
          <br />
          Textdata: {this.state["send_text"]}
          <br />
          <br />
          later:
          <br />
          解析結果: {this.state.resulttext["answer"]}
          <br />
        </pre> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workSpaceState: state.workSpaceState,
  parsedParamState: state.parsedParamState,
  apiResultState: state.apiResultState
});

const mapDispatchToProps = dispatch => ({
  updateParsedParam: parsedParam => dispatch(updateParsedParam(parsedParam))
});

export default connect(mapStateToProps, mapDispatchToProps)(CodeArea);
