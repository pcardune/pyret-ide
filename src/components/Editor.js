import React from 'react';
import SplitPane from '@mnmtanish/react-split-pane';
import * as constant from '../redux/constants';
import {connect} from 'react-redux';
import {styles} from './styles';
import Toolbar from './Toolbar';
import CodeWindow from './CodeWindow';
import Spinner from './Spinner';

class Editor extends React.Component {
  render() {
    return (
      <div>
        <Toolbar logo="https://code.pyret.org/img/pyret-logo.png" />
        {this.props.isLoadingRuntime &&
         <Spinner style={styles.spinners.window} />
        }
        {this.props.hasLoadedRuntime &&
         <div>
           <SplitPane defaultSize="50%" split="vertical">
             <div><CodeWindow/></div>
             <div><p>{this.props.result}</p></div>
           </SplitPane>
         </div>
        }
      </div>
    );
  }
}

Editor.propTypes = {
  isLoadingRuntime: React.PropTypes.bool,
  hasLoadedRuntime: React.PropTypes.bool,
  result: React.PropTypes.any,
};


export default connect(
  state => {
    return {
      isLoadingRuntime: state.loadApi.stage === constant.LoadApiStages.STARTED,
      hasLoadedRuntime: state.loadApi.stage === constant.LoadApiStages.FINISHED,
      result: state.runCode.result,
    };
  }
)(Editor);
