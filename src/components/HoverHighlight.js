import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium from "radium";
import styles from "./styles";
import {highlightsOn, highlightsOff} from '../redux/actionCreators';

@Radium
export class HoverHighlight extends React.Component {

  mouseOver = () => {
    this.props.highlightsOn(this.props.target, this.props.highlights);
  }

  mouseOut = () => {
    this.props.highlightsOff(this.props.target, this.props.highlights);
  }

  render() {
    return (
      <span
        style={[
          styles.highlights.hoverHighlight,
          { ':hover': { backgroundColor: this.props.color } }
        ]}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        {this.props.children}
      </span>
    );
  }
}

HoverHighlight.propTypes = {
  color: React.PropTypes.string,
  target: React.PropTypes.string,
  highlights: React.PropTypes.arrayOf(React.PropTypes.shape({
    span: React.PropTypes.shape({
      from: React.PropTypes.object,
      to: React.PropTypes.object,
    }),
    color: React.PropTypes.string
  })),
  highlightsOn: React.PropTypes.func.isRequired,
  highlightsOff: React.PropTypes.func.isRequired,
  children: React.PropTypes.node
};

export default connect(
  () => ({ }),
  dispatch => bindActionCreators({
    highlightsOn: highlightsOn,
    highlightsOff: highlightsOff
  }, dispatch)
)(HoverHighlight);

