import React, { Component } from "react";
import { connect } from "react-redux";
import Blockly from "node-blockly/browser";
import Select from 'react-select'

import {
  updateParsedParam,
  updateWorkSpace,
  updateApiResult,
  setLanguage
} from "../store/actions";

import "../css/ControlPanel.css";

import _env from "../config/env";
import Axios from "axios";

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadXmlFile() {
    let selectedFile = document.getElementById("xmlFile");
    let reader = new FileReader();
    reader.readAsText(selectedFile.files[0]);
    reader.onload = () => {
      let resTxt = reader.result;
      let workSpace = this.props.workSpaceState.workSpace;
      // workSpace.clear();
      let xmlDom = Blockly.Xml.textToDom(resTxt);
      Blockly.Xml.domToWorkspace(xmlDom, workSpace);
      this.props.updateWorkSpace(workSpace);
    };
  }

  runScript() {
    let code = Blockly.JavaScript.workspaceToCode(
      this.props.workSpaceState.workSpace
    );
    console.log(code)
    let parsedCode = JSON.parse(code);
    console.log(parsedCode);
    // 日本語版なら
    if (this.props.languageState.language === 'ja') {
      Axios.get(`${_env.localAPIJA}`, {
        params: {
          query: parsedCode.send_query,
          text: parsedCode.send_text
        }
      }).then(res => {
        console.log(res.data);
        this.props.updateApiResult(res.data);
      });
    }
    // 英語版なら
    else if (this.props.languageState.language === 'en') {
      console.log("英語版")
      Axios.get(`${_env.localAPI}`, {
        params: {
          query: parsedCode.send_query,
          text: parsedCode.send_text
        }
      }).then(res => {
        console.log(res.data);
        this.props.updateApiResult(res.data);
      });
    }
    // if (code !== "") {
    //   let tmp = JSON.parse(code);
    //   this.props.updateParsedParam(tmp);
    // } else {
    //   window.alert("Invalid workspace");
    // }
  }

  saveWorkSpace() {
    let xmlDom = Blockly.Xml.workspaceToDom(
      this.props.workSpaceState.workSpace
    );
    let domToText = Blockly.Xml.domToText(xmlDom);
    let blob = new Blob([domToText], { type: "text/plain" });

    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(blob, "dom.txt");
    } else {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.target = "_blank";
      a.download = "dom.txt";
      a.click();
    }
  }

  consoleXml() {
    const workspace = this.props.workSpaceState.workSpace;

    var xml = Blockly.Xml.workspaceToDom(workspace);
    var myBlockXml = Blockly.Xml.domToText(xml);

    console.log(myBlockXml);
  }

  options = [

    { value: 'en', label: 'English' },
    { value: 'ja', label: '日本語' }
  ]

  render() {
    return (
      <div className="control-panel-container">
        <input type="file" id="xmlFile" />
        <div className="runButton-wrapper">
          <button
            className="loadButton"
            type="button"
            name="loadButton"
            onClick={() => this.loadXmlFile()}
          >
            ファイル読み込み
          </button>
        </div>
        <div className="runButton-wrapper">
          <button
            className="runButton"
            type="button"
            name="runButton"
            onClick={() => this.runScript()}
          >
            RUN
          </button>
        </div>
        <div className="runButton-wrapper">
          <button
            className="confirmButton"
            type="button"
            name="confirmButton"
            onClick={() => this.consoleXml()}
          >
            confirmXML
          </button>
        </div>

        <div className="runButton-wrapper">
          <button
            className="saveButton"
            type="button"
            name="runButton"
            onClick={() => this.saveWorkSpace()}
          >
            保存
          </button>
        </div>
        <Select className="languageSelect" options={this.options} defaultInputValue={'日本語'} defaultValue={'ja'} onChange={obj => this.props.setLanguage(obj.value)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  workSpaceState: state.workSpaceState,
  parsedParamState: state.parsedParamState,
  languageState: state.languageState
});

const mapDispatchToProps = dispatch => ({
  updateParsedParam: parsedParam => dispatch(updateParsedParam(parsedParam)),
  updateWorkSpace: workSpace => dispatch(updateWorkSpace(workSpace)),
  updateApiResult: apiResult => dispatch(updateApiResult(apiResult)),
  setLanguage: language => dispatch(setLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
