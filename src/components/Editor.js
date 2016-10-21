import React from 'react';
import Radium from 'radium';
import SplitPane from '@mnmtanish/react-split-pane';
import {connect} from 'react-redux';
import * as selectors from '../redux/selectors';
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
    display: "block",
    marginTop: 120,
    marginBottom: 100,
    height: 50,
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  },
  splitPaneWrapper: {
    flexBasis: '100%',
    position: 'relative',
    zIndex: 0,
  },
};

class Editor extends React.Component {
  render() {
    return (
      <div style={styles.editor}>
        <Toolbar logo="https://code.pyret.org/img/pyret-logo.png" />
        <div style={[styles.splitPaneWrapper, {fontSize: this.props.fontSize}]}>
          <SplitPane
            defaultSize="50%"
            split="vertical"
            className="PyretIDE-SplitPane"
          >
            <CodeWindow uri="definitions://" />
            <div style={{overflow: 'auto', height: '100%'}}>
              {this.props.isLoadingRuntime &&
              <div>
                <Spinner style={styles.spinner} />
                <p style={{textAlign: "center"}}>
                  {loadTexts[Math.floor(Math.random() * loadTexts.length)]}
                </p>
              </div>
              }
              <ErrorBox />
              <REPLHistoryList />
              <REPLInput />
            </div>
          </SplitPane>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  isLoadingRuntime: React.PropTypes.bool,
  fontSize: React.PropTypes.number,
};

export default connect(
  state => {
    return {
      isLoadingRuntime: selectors.isLoadingRuntime(state),
      fontSize: selectors.getFontSize(state),
    };
  }
)(Radium(Editor));
