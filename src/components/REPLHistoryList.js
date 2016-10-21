import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';
import REPLHistoryItem from './REPLHistoryItem';
import * as selectors from '../redux/selectors';

export class REPLHistoryList extends React.Component {
  render() {
    if (!this.props.hasHistory) {
      return (null);
    }
    return (
      <div style={{fontFamily: 'monospace'}}>
        {this.props.REPLHistory.map((item, index) => (
          <REPLHistoryItem
            key={index}
            input={item.code}
            result={item.result}
          />
         ))}
      </div>
    );
  }
}

REPLHistoryList.propTypes = {
  REPLHistory: React.PropTypes.instanceOf(Immutable.List),
  hasHistory: React.PropTypes.bool,
};

export default connect(
  state => {
    return {
      hasHistory: selectors.hasHistory(state),
      REPLHistory: selectors.getHistory(state),
    };
  }
)(REPLHistoryList);
