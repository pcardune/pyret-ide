import React from 'react';
import Radium from 'radium';
import SplitPane from '@mnmtanish/react-split-pane';
import * as selectors from '../redux/selectors';
import {connect} from 'react-redux';
import Toolbar from './Toolbar';
import CodeWindow from './CodeWindow';
import Spinner from './Spinner';
import ErrorBox from './ErrorBox';
import {loadTexts} from '../redux/constants';
import REPLHistoryList from './REPLHistoryList';
import REPLInput from './REPLInput';

const styles = {
  editor: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    alignItems: 'stretch',
  },
  spinner: {
    paddingTop: 200,
    height: 50,
    width: "auto",
    margin: "auto",
    display: "flex",
  },
  splitPaneWrapper: {
    flexBasis: '100%',
    position: 'relative',
  },
};

class Editor extends React.Component {
  render() {
    return (
      <div style={styles.editor}>
        <Toolbar logo="https://code.pyret.org/img/pyret-logo.png" />
        <div style={[styles.splitPaneWrapper, {fontSize: this.props.fontSize}]}>
          <SplitPane defaultSize="50%" split="vertical">
            <CodeWindow/>
            <div>
              {this.props.isLoadingRuntime &&
               <div>
                 <Spinner style={styles.spinner}/>
                 <p style={{textAlign: "center"}}>
                   {loadTexts[Math.floor(Math.random() * loadTexts.length)]}
                 </p>
               </div>
              }
              <ErrorBox/>
              <REPLHistoryList/>
              <REPLInput/>
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
      result: selectors.getResult(state),
      hasHistory: selectors.hasHistory(state),
      isLoadingRuntime: selectors.isLoadingRuntime(state),
      hasLoadedRuntime: selectors.hasLoadedRuntime(state),
      fontSize: selectors.getFontSize(state),
    };
  }
)(Radium(Editor));
