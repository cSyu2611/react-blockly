import React from "react";
import Blockly from "node-blockly/browser";
import "../css/Blockly.css";

class ToolBox extends React.Component {
  componentDidMount() {
    /* --------機能選択------------*/
    // Blockly.Blocks["hyoji"] = {
    //   init: function() {
    //     this.setPreviousStatement(true);
    //     let option = [
    //       ["強調", "emphasis"],
    //       ["抜出", "pickup"],
    //       ["類似", "similar"]
    //     ];
    //     this.appendDummyInput("Verb")
    //       .appendField("機能:")
    //       .appendField(new Blockly.FieldDropdown(option), "API");
    //     this.appendValueInput("Query").appendField("Query:");
    //     this.setInputsInline(true);
    //     this.appendValueInput("Text")
    //       /*.setCheck("String")*/
    //       .appendField("Text:");
    //     this.setInputsInline(true);
    //     this.setColour(230);
    //   }
    // };
    // Blockly.JavaScript["hyoji"] = function (block) {
    //   var send_text = Blockly.JavaScript.valueToCode(
    //     block,
    //     "Text",
    //     Blockly.JavaScript.ORDER_ATOMIC
    //   );
    //   var send_query = Blockly.JavaScript.valueToCode(
    //     block,
    //     "Query",
    //     Blockly.JavaScript.ORDER_ATOMIC
    //   );
    //   let api_select = block.getFieldValue("API") || "";
    //   return `
    //   {
    //    "api_select": "${api_select}",
    //    "send_text": "${send_text}",
    //    "send_query":"${send_query}"
    //   }
    //   `;
    // };

    Blockly.Blocks["hyoji"] = {
      init: function() {
        this.jsonInit({
          message0: "%1 %2 %3",
          args0: [
            {
              type: "field_dropdown",
              name: "API",
              options: [
                ["強調", "emphasis"],
                ["抜出", "pickup"],
                ["類似", "similar"]
              ]
            },
            {
              type: "input_value",
              name: "QUERY"
              // check: "String",
            },
            {
              type: "input_value",
              name: "TEXT"
            }
          ],
          inputsInline: true,
          colour: 230
        });
      }
    };
    Blockly.JavaScript["hyoji"] = function(block) {
      var send_text = Blockly.JavaScript.valueToCode(
        block,
        "TEXT",
        Blockly.JavaScript.ORDER_ATOMIC
      );
      console.log(send_text);
      var send_query = Blockly.JavaScript.valueToCode(
        block,
        "QUERY",
        Blockly.JavaScript.ORDER_ATOMIC
      );
      let api_select = block.getFieldValue("API") || "";
      return `
      {
       "api_select": "${api_select}",
       "send_text": "${send_text}",
       "send_query":"${send_query}"
      }
      `;
    };
    // Blockly.JavaScript["query_creat"] = function (block) {
    //   var temp_pattern = block.getFieldValue("PATTERN");
    //   var temp_x = block.getFieldValue("X");
    //   var temp_y = block.getFieldValue("Y");
    //   var temp_query = temp_pattern + "(" + temp_x + "," + temp_y + "):-";

    //   var test = Blockly.JavaScript.statementToCode(block, "DO");

    //   var code = temp_query + test;
    //   return code;
    // };

    /* --------POS(X,Y)------------*/
    Blockly.Blocks["pos_x_y_"] = {
      init: function() {
        this.appendDummyInput().appendField("POS(");
        this.appendDummyInput().appendField(
          new Blockly.FieldTextInput("X"),
          "MorphemeNumber"
        );
        this.appendDummyInput().appendField(",");
        this.appendDummyInput().appendField(
          new Blockly.FieldTextInput("Y"),
          "WordClass"
        );
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(330);
      }
    };

    //     Blockly.JavaScript["pos_x_y_"] = function(block) {
    //       /*  var Text_morphemenumber = Blockly.JavaScript.valueToCode(block, 'MorphemeNumber', Blockly.JavaScript.ORDER_ATOMIC);
    //   var Text_wordclass = Blockly.JavaScript.valueToCode(block, 'WordClass', Blockly.JavaScript.ORDER_ATOMIC);
    // */
    //       var text_morphemenumber = block.getFieldValue("MorphemeNumber");
    //       var text_wordclass = block.getFieldValue("WordClass");
    //       var code = "POS(" + text_morphemenumber + "," + text_wordclass + ")";
    //       return [code, Blockly.JavaScript.ORDER_ATOMIC];
    //     };

    /* --------author(X,Y)------------*/
    Blockly.Blocks["author_x_y_"] = {
      init: function() {
        this.appendDummyInput().appendField("author(");
        this.appendDummyInput().appendField(
          new Blockly.FieldTextInput("X"),
          "MorphemeNumber"
        );
        this.appendDummyInput().appendField(",");
        this.appendDummyInput().appendField(
          new Blockly.FieldTextInput("Y"),
          "WordClass"
        );
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(330);
      }
    };

    Blockly.JavaScript["author_x_y_"] = function(block) {
      /*  var Text_morphemenumber = Blockly.JavaScript.valueToCode(block, 'MorphemeNumber', Blockly.JavaScript.ORDER_ATOMIC);
  var Text_wordclass = Blockly.JavaScript.valueToCode(block, 'WordClass', Blockly.JavaScript.ORDER_ATOMIC);
*/
      var text_morphemenumber = block.getFieldValue("MorphemeNumber");
      var text_wordclass = block.getFieldValue("WordClass");
      var code = "author(" + text_morphemenumber + "," + text_wordclass + ").";
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    /* --------textdata------------*/
    Blockly.Blocks["textdata"] = {
      init: function() {
        this.appendDummyInput().appendField("(");
        this.appendDummyInput().appendField(
          new Blockly.FieldTextInput("text"),
          "Td"
        );
        this.appendDummyInput().appendField(")");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(330);
      }
    };
    Blockly.JavaScript["textdata"] = function(block) {
      var td = block.getFieldValue("Td");
      var code = td;
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    /* -------- wwwwwwwwwwww ------------*/
    // Blockly.Blocks['string_length'] = {
    //   init: function() {
    //     this.appendValueInput('VALUE')
    //         .setCheck('String')
    //         .appendField('length of');
    //     this.setOutput(true, 'Number');
    //     this.setColour(160);
    //     this.setTooltip('Returns number of letters in the provided text.');
    //     this.setHelpUrl('http://www.w3schools.com/jsref/jsref_length_string.asp');
    //   }
    // };
    // {
    //   "type": "string_length",
    //   "message0": 'length of %1',
    //   "args0": [
    //     {
    //       "type": "input_value",
    //       "name": "VALUE",
    //       "check": "String"
    //     }
    //   ],
    //   "output": "Number",
    //   "colour": 160,
    //   "tooltip": "Returns number of letters in the provided text.",
    //   "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
    // }
    /* -------- wwwwwwwwwwwwwwwwwwwww ------------*/

    /* -------- Query Creat ------------*/
    Blockly.Blocks["query_creat"] = {
      init: function() {
        this.jsonInit({
          message0: "%1(%2,%3)",
          args0: [
            {
              type: "field_input",
              name: "PATTERN",
              text: "Pattern",
              check: "String"
            },
            {
              type: "field_input",
              name: "X",
              text: "X",
              check: "String"
            },
            {
              type: "field_input",
              name: "Y",
              text: "Y",
              check: "String"
            }
          ],
          message1: "%1",
          args1: [{ type: "input_statement", name: "DO" }],
          output: String,
          colour: 120
        });
      }
    };
    Blockly.JavaScript["query_creat"] = function(block) {
      var temp_pattern = block.getFieldValue("PATTERN");
      var temp_x = block.getFieldValue("X");
      var temp_y = block.getFieldValue("Y");
      var temp_query = temp_pattern + "(" + temp_x + "," + temp_y + "):-";

      var test = Blockly.JavaScript.statementToCode(block, "DO");

      var code = temp_query + test + ".";
      // return code;
      return [code, Blockly.JavaScript.ORDER_ATOMIC];
    };

    /* --------not------------*/
    Blockly.Blocks["not"] = {
      init: function() {
        this.jsonInit({
          message0: "not %1",
          args0: [
            {
              type: "input_statement",
              name: "DO"
            }
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 360
        });
      }
    };
    Blockly.JavaScript["not"] = function(block) {
      var temp_query = Blockly.JavaScript.statementToCode(block, "DO");
      var code = "not(" + temp_query + ")";
      return code;
    };

    /* --------and------------*/
    Blockly.Blocks["and"] = {
      init: function() {
        this.jsonInit({
          message0: "and",
          previousStatement: null,
          nextStatement: null,
          colour: 400
        });
      }
    };
    Blockly.JavaScript["and"] = function(block) {
      var code = ",";
      return code;
    };

    /* --------(A;B)------------*/
    Blockly.Blocks["kakko"] = {
      init: function() {
        this.jsonInit({
          message0: "(%1;%2)",
          args0: [
            {
              type: "input_statement",
              name: "A",
              check: "String"
            },
            {
              type: "input_statement",
              name: "B",
              check: "String"
            }
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 200
        });
      }
    };
    Blockly.JavaScript["kakko"] = function(block) {
      var statements_A = Blockly.JavaScript.statementToCode(block, "A");
      var statements_B = Blockly.JavaScript.statementToCode(block, "B");
      var code = "(" + statements_A + ";" + statements_B + ")";
      return code;
    };

    /* --------write_semantic(semantic)------------*/
    Blockly.Blocks["write_semantic"] = {
      init: function() {
        this.jsonInit({
          message0: "semantic %1",
          args0: [
            {
              type: "field_input",
              name: "SEMANTIC",
              text: "Input Semantic",
              check: "String"
            }
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 320
        });
      }
    };

    Blockly.JavaScript["write_semantic"] = function(block) {
      var temp_sentence = block.getFieldValue("SEMANTIC");
      var code = "semantic(" + temp_sentence + ")";
      return code;
    };

    /* --------write_sentence(sentence)------------*/

    Blockly.Blocks["write_sentence"] = {
      init: function() {
        this.jsonInit({
          message0: "sentence %1",
          args0: [
            {
              type: "field_input",
              name: "SENTENCE",
              text: "Input Sentence",
              check: "String"
            }
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 300
        });
      }
    };

    Blockly.JavaScript["write_sentence"] = function(block) {
      var temp_sentence = block.getFieldValue("SENTENCE");
      var code = "sentence(" + temp_sentence + ")";
      return code;
    };

    /* --------type(node?(X0),wordClass(verb...))------------*/

    Blockly.Blocks["type"] = {
      init: function() {
        this.jsonInit({
          message0: "type(%1,%2)",
          args0: [
            {
              type: "field_input",
              name: "NODE",
              text: "Input Node",
              check: "String"
            },
            {
              type: "field_input",
              name: "WORDCLASS",
              text: "Input Wordclass",
              check: "String"
            }
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 290
        });
      }
    };

    Blockly.JavaScript["type"] = function(block) {
      var temp_node = block.getFieldValue("NODE");
      var temp_wordclass = block.getFieldValue("WORDCLASS");
      var code = "type(" + temp_node + "," + temp_wordclass + ")";
      return code;
    };

    /* --------role(X1,動作主):role(node,target)------------*/

    Blockly.Blocks["role"] = {
      init: function() {
        this.jsonInit({
          message0: "role(%1,%2)",
          args0: [
            {
              type: "field_input",
              name: "NODE",
              text: "Input Node",
              check: "String"
            },
            {
              type: "field_input",
              name: "TARGET",
              text: "Input Target",
              check: "String"
            }
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 280
        });
      }
    };

    Blockly.JavaScript["role"] = function(block) {
      var temp_node = block.getFieldValue("NODE");
      var temp_target = block.getFieldValue("TARGET");
      var code = "role(" + temp_node + "," + temp_target + ")";
      return code;
    };

    /* --------main(X0,書く):main(node,target)------------*/
    Blockly.Blocks["main"] = {
      init: function() {
        this.jsonInit({
          message0: "main(%1,%2)",
          args0: [
            {
              type: "field_input",
              name: "NODE",
              text: "Input Node",
              check: "String"
            },
            {
              type: "field_input",
              name: "TARGET",
              text: "Input Target",
              check: "String"
            }
          ],
          previousStatement: null,
          nextStatement: null,
          colour: 270
        });
      }
    };

    Blockly.JavaScript["main"] = function(block) {
      var temp_node = block.getFieldValue("NODE");
      var temp_target = block.getFieldValue("TARGET");
      var code = "main(" + temp_node + "," + temp_target + ")";
      return code;
    };

    /* -------- Query Concept ------------*/
    Blockly.Blocks["query_concept"] = {
      init: function() {
        this.appendDummyInput()
          .appendField("Xの概念:")
          .appendField(new Blockly.FieldTextInput("例)動作主"), "x_concept");
        this.appendDummyInput()
          .appendField("Yの概念:")
          .appendField(new Blockly.FieldTextInput("例)作品"), "y_concept");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
      }
    };
    Blockly.JavaScript["query_concept"] = function(block) {
      // var text_x_concept = block.getFieldValue("x_concept");
      // var text_y_concept = block.getFieldValue("y_concept");
      // TODO: Assemble JavaScript into code variable.
      var code = "...;\n";
      return code;
    };
  }
  render() {
    return (
      <div className="toolbox">
        <xml id="toolbox">
          {/* カテゴリごとにラベルをつけれる */}
          {/* <category name="Control" colour="210">
            <block type="controls_if"></block>
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for"></block>
          </category>
          <category name="Logic" colour="120">
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="Math" colour="230">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
          </category>
          <category name="Text" colour="400">
            <block type="text"></block>
            <block type="text_print"></block>
          </category>
          <category name="Variables" colour="330" custom="VARIABLE"></category>
          <category name="Functions" colour="290" custom="PROCEDURE"></category> */}
          {/* 境界線 */}
          {/* <sep gap="8"></sep> */}
          <category name="NL" colour="300">
            {/* <block type="pos_x_y_"></block> */}
            <block type="author_x_y_"></block>
            <block type="hyoji"></block>
            <block type="textdata"></block>
          </category>
          <category name="CreateQuery" colour="270">
            <block type="query_creat"></block>
          </category>
          <category name="LogicalOperator" colour="240">
            <block type="not"></block>
            <block type="and"></block>
            <block type="kakko"></block>
          </category>
          {/* <block type="query_concept"></block> */}
          <category name="PrologParts" colour="210">
            <block type="write_sentence"></block>
            <block type="write_semantic"></block>
            <block type="type"></block>
            <block type="role"></block>
            <block type="main"></block>
          </category>
        </xml>
      </div>
    );
  }
}

export default ToolBox;
