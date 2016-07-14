import React from 'react';
import SplitPane from '@mnmtanish/react-split-pane';
import * as selectors from '../redux/selectors';
import {connect} from 'react-redux';
import {styles} from './styles';
import Toolbar from './Toolbar';
import CodeWindow from './CodeWindow';
import Spinner from './Spinner';
import ErrorBox from './ErrorBox';
import {loadTexts} from '../redux/constants';
import REPLHistoryList from './REPLHistoryList';
import REPLInput from './REPLInput';

class Editor extends React.Component {
  render() {
    return (
      <div>
        <Toolbar logo="https://code.pyret.org/img/pyret-logo.png" />
        <div style={{fontSize: this.props.fontSize}}>
          <SplitPane defaultSize="50%" split="vertical">
            <div><CodeWindow/></div>
            <div>
              {this.props.isLoadingRuntime &&
               <div>
                 <Spinner style={styles.spinners.window}/>
                 <p style={{textAlign: "center"}}>
                   {loadTexts[Math.floor(Math.random() * loadTexts.length)]}
                 </p>
               </div>
              }
              <ErrorBox/>
              <div style={{position: 'absolute', bottom: 5}}>
                <REPLHistoryList/>
                <REPLInput/>
              </div>
            </div>
          </SplitPane>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  result: React.PropTypes.any,
  hasHistory: React.PropTypes.bool,
  isLoadingRuntime: React.PropTypes.bool,
  hasLoadedRuntime: React.PropTypes.bool,
  fontSize: React.PropTypes.number,
};

export default connect(
  state => {
    return {
      result: state.editor.result,
      hasHistory: selectors.hasHistory(state),
      isLoadingRuntime: selectors.isLoadingRuntime(state),
      hasLoadedRuntime: selectors.hasLoadedRuntime(state),
      fontSize: selectors.getFontSize(state),
    };
  }
)(Editor);
