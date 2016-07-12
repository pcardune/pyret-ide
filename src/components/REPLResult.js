import React from 'react';

export default class REPLResult extends React.Component {
  render() {
    return (
      <div>
        {this.props.result}
      </div>
    );
  }
}

REPLResult.propTypes = {
  result: React.PropTypes.any,
};
