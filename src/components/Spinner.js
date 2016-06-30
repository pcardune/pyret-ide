import React from 'react';
import Radium from 'radium';

export class Spinner extends React.Component {
  render() {
    return (<img style={this.props.style}
                 src="https://code.pyret.org/img/pyret-spin.gif" />);
  }
}

Spinner.propTypes = {
  style: React.PropTypes.object,
};

export default Radium(Spinner);
