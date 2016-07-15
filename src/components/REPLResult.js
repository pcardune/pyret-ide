import React from 'react';
import REPLValue from './REPLValue';

export default class REPLResult extends React.Component {
  render() {
    return (
      <div>
        <REPLValue reprValue={this.props.result}/>
      </div>
    );
  }
}

REPLResult.propTypes = {
  result: React.PropTypes.any,
};
