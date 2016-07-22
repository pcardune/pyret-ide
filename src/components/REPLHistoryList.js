import React from 'react';
import {connect} from 'react-redux';
import Immutable from 'immutable';
import REPLHistoryItem from './REPLHistoryItem';
import * as selectors from '../redux/selectors';

export class REPLHistoryList extends React.Component {
  render() {
    if (!this.props.hasHistory) {
      return (null);
    }h
    return (
      <div>
        {this.props.REPLHistory.map((item, index) => (
           <REPLHistoryItem key={index}
                            input={item.get('code')}
                            result={item.get('result')}/>
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
