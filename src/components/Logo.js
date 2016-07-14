import React from 'react';
import Radium from 'radium';
import {styles} from './styles';

class Logo extends React.Component {
  render () {
    return (
      <a href="https://code.pyret.org/">
        <img src="https://code.pyret.org/img/pyret-logo.png"
             style={[styles.logos[this.props.kind], this.props.style]}/>
      </a>
    );
  }
}

Logo.propTypes = {
  kind: React.PropTypes.string,
  style: React.PropTypes.object
};

export default Radium(Logo);
