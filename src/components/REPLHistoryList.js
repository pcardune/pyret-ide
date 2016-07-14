import React from 'react';
import REPLHistoryItem from './REPLHistoryItem';
import * as selectors from '../redux/selectors';
import {connect} from 'react-redux';
import Immutable from 'immutable';

export default class REPLHistoryList extends React.Component {
  render() {
    if (!this.props.hasHistory) {
      return (null);
    }
    return (
      <div>
        {this.props.REPLHistory.map((item, index) => (
           <REPLHistoryItem key={index}
                            input={item.code}
                            result={item.result}/>
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
