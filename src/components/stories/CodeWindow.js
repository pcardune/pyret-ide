import React from 'react';
import {storiesOf, linkTo} from '@kadira/storybook';
import {CodeWindow} from '../CodeWindow';

import 'codemirror/mode/python/python';

class ColorPickSpan extends React.Component {
  mouseOver() {
    this.props.onChange([{color: this.props.color, span: this.props.span}]);
  }
  mouseOut() {
    this.props.onChange([]);
  }
  render() {
    return (
      <span
        style={{
          backgroundColor: this.props.color
        }}
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
      >
        {this.props.children}
      </span>
    );
  }
}

class HighlightPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlights: []
    };
  }
  changeHighlight(highlights) {
    this.setState({
      highlights: highlights
    });
  }
  render() {
    return (
      <div>
        <div>
          <ColorPickSpan
            onChange={this.changeHighlight.bind(this)}
            color="#eee"
            span={{from:{line: 0, ch: 0}, to: {line:0, ch: 5}}}
          >
            Gray
          </ColorPickSpan>
          <ColorPickSpan
            onChange={this.changeHighlight.bind(this)}
            color="blue"
            span={{from:{line: 1, ch: 5}, to: {line:1, ch: 10}}}
          >
            Blue
          </ColorPickSpan>
        </div>
        <CodeWindow
          source={"print('Ahoy world')\ncheck: 2 + 2 is 4 end"}
          codemirrorOptions={{ mode: "python" }}
          highlights={this.state.highlights}/>
      </div>
    );
  }
}

storiesOf("CodeWindow", module)
  .add("withSource", () => (
    <CodeWindow
      source={"print('Ahoy, world!')"}
      codemirrorOptions={{
        mode: "python" 
      }}/>
  ))
  .add("highlighted", () => (
    <CodeWindow
      source={"print('Ahoy, world!')"}
      codemirrorOptions={{
        mode: "python" 
      }}
      highlights={[
        {
          color: "#eeeeee",
          span: {from: {line: 0, ch: 1}, to: {line: 0, ch: 5}}
        }
      ]}/>
  ))
  .add("highlightChoice", () => (
    <HighlightPicker/>
  ));
