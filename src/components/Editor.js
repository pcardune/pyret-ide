import React from 'react';
import SplitPane from '@mnmtanish/react-split-pane';
import * as selectors from '../redux/selectors';
import {connect} from 'react-redux';
import {styles} from './styles';
import Toolbar from './Toolbar';
import CodeWindow from './CodeWindow';
import Spinner from './Spinner';
import ErrorBox from './ErrorBox';

class Editor extends React.Component {
  render() {
    return (
      <div>
        <Toolbar/>
        {this.props.isLoadingRuntime &&
         <Spinner style={styles.spinners.window} />
        }
        {this.props.hasLoadedRuntime &&
         <div>
           <SplitPane defaultSize="50%" split="vertical">
             <div><CodeWindow/></div>
             <div>
               <ErrorBox/>
               <p>{this.props.result}</p>
             </div>
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
      isLoadingRuntime: selectors.isLoadingRuntime(state),
      hasLoadedRuntime: selectors.hasLoadedRuntime(state),
      result: state.runCode.result,
    };
  }
)(Editor);
