import React from 'react';
import REPLResult from './REPLResult';

export default class REPLHistoryItem extends React.Component {
  render() {
    return (
      <div style={{margin: 5}}>
        {this.props.input &&
        <code>
          <strong>{'>'}</strong> {this.props.input}
        </code>
        }
        <REPLResult result={this.props.result} />
      </div>
    );
  }
}

REPLHistoryItem.propTypes = {
  input: React.PropTypes.string,
  result: React.PropTypes.any,
};
