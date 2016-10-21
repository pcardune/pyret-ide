import React from 'react';
import Radium from 'radium';
import {connect} from 'react-redux';
import Spinner from './Spinner';
import * as actions from '../redux/actionCreators';
import * as selectors from '../redux/selectors';
import styles from './styles';

const ReprValueProp = (valuePropType) => React.PropTypes.shape({
  type: React.PropTypes.string.isRequired,
  value: valuePropType
});

function REPLValueProps(reprValueType) {
  return {
    expansionFuel: React.PropTypes.shape({
      breadth: React.PropTypes.number.isRequired,
      depth: React.PropTypes.number.isRequired,
    }),
    reprValue: reprValueType,
    style: React.PropTypes.object,
    postfix: React.PropTypes.node,
  }
};

class LazyValue extends React.Component {

  static propTypes = REPLValueProps(React.PropTypes.object);

  state = {
    reprValue: null
  };

  expand = () => this.setState({reprValue: this.props.reprValue.getValue()});

  render() {
    if (this.state.reprValue === null) {
      return <button onClick={this.expand}>&lt;click to expand&gt;</button>;
    } else {
      return <REPLValue {...this.props} reprValue={this.state.reprValue} />;
    }
  }
}

@Radium
class LazyIterValueEl extends React.Component {

  static propTypes = Object.assign(
    REPLValueProps(React.PropTypes.object),
    {
      executeHostCallable: React.PropTypes.func,
      isRunning: React.PropTypes.bool,
    }
  );

  state = {
    expanding: false,
    values: []
  };

  componentDidMount() {
    this.expand();
  }

  get remainingSize() {
    return this.props.reprValue.size - this.state.values.length;
  }

  expand = () => {
    this.setState({ expanding: true });
    const loop = (curBreadth) => {
      if (curBreadth < this.props.expansionFuel.breadth &&
          curBreadth < this.remainingSize) {
        this.props.executeHostCallable(
          this.props.reprValue.callable,
          (renderedValue) => {
            this.setState({values: this.state.values.concat([renderedValue])});
            loop(curBreadth + 1);
          }
        );
      } else {
        this.setState({ expanding: false });
      }
    };
    loop(0);
  }

  render() {
    return (
      <div style={this.props.style}>
        [{this.props.reprValue.name}{': '}
        {this.state.values.map((rv, ix) => (
          <span key={ix}>
            <REPLValue
              style={{marginLeft: 10}}
              postfix={ix < this.remainingSize + this.state.values.length - 1 ? ", " : ''}
              expansionFuel={{
                breadth: this.props.expansionFuel.depth,
                depth: 0
              }}
              reprValue={rv}
            />
          </span>
         ))}
        {this.remainingSize > 0 &&
        <button
          disabled={this.props.isRunning}
          onClick={this.expand}
          style={styles.linkButton}
        >
          {this.state.expanding &&
           <span style={{position: 'relative', marginRight: 25}}>
             <Spinner style={{width: 20, position: 'absolute'}} />
           </span>
          }
          ...{this.remainingSize} items
        </button>}
        ]{this.props.postfix}
      </div>
    );
  }
}

export const LazyIterValue = connect(
  state => ({
    isRunning: selectors.isRunning(state)
  }),
  {
    executeHostCallable: actions.executeHostCallable
  }
)(LazyIterValueEl);

function OpaqueValue() {
  return <span>&lt;opaque&gt;</span>;
}

function CyclicValue() {
  return <span>&lt;cyclic&gt;</span>;
}

function ImageValue() {
  return <span>Image</span>;
}

class NumberValue extends React.Component {
  static propTypes = REPLValueProps(
    ReprValueProp(
      React.PropTypes.oneOfType([
        React.PropTypes.shape({
          numerator: React.PropTypes.number,
          denominator: React.PropTypes.number,
          whole: React.PropTypes.number,
          fractional: React.PropTypes.number,
          repeating: React.PropTypes.number,
        })
      ])
    )
  );

  state = {showFraction: false};

  toggleFraction = () => {
    this.setState({showFraction: !this.state.showFraction});
  }

  render() {
    if (typeof this.props.reprValue.value === "object") {
      const {
        numerator,
        denominator,
        whole,
        fractional,
        repeating
      } = this.props.reprValue.value;
      let text = `${whole}.${fractional}${repeating}`;
      if (this.state.showFraction) {
        text = `${numerator}/${denominator}`;
      }
      return (
        <button onClick={this.toggleFraction}>
          {text}
        </button>
      );
    }
    return <span>{this.props.reprValue.value}{this.props.postfix}</span>;
  }
}

function NothingValue({postfix}) {
  return <span>&lt;nothing&gt;{postfix}</span>;
}
NothingValue.propTypes = REPLValueProps(React.PropTypes.object);

function BooleanValue({reprValue, postfix}) {
  return <span>{reprValue.value ? "true" : "false"}{postfix}</span>;
}
BooleanValue.propTypes = REPLValueProps(React.PropTypes.object);

function StringValue({reprValue, postfix}) {
  return <span>{`"${reprValue.value}"`}{postfix}</span>;
}
StringValue.propTypes = REPLValueProps(React.PropTypes.object);

function MethodValue({postfix}) {
  return <span>&lt;method&gt;{postfix}</span>;
}

function FuncValue({postfix}) {
  return <span>&lt;func&gt;{postfix}</span>;
}

function ArrayValue({reprValue, postfix}) {
  return (
    <span>
      [
      {reprValue.values.map((item, index) => (
        <span>
          <REPLValue reprValue={item} />
          {index < reprValue.values.length - 1 && ", "}
        </span>
       ))}
      ]{postfix}
    </span>
  );
}
ArrayValue.propTypes = REPLValueProps(React.PropTypes.object);

function RefValue({postfix}) {
  return <span>Ref{postfix}</span>;
}

function TupleValue({reprValue, postfix}) {
  return (
    <span>
      (
      {reprValue.values.map((item, index) => (
        <span>
          <REPLValue reprValue={item} />
          {index < reprValue.values.length - 1 && ", "}
        </span>
       ))}
      ){postfix}
    </span>
  );
}
TupleValue.propTypes = REPLValueProps(React.PropTypes.object);

function ObjValue({reprValue, postfix}) {
  return (
    <dl>
      {reprValue.keyValues.map(
         ({key, value}) => [
           <dt key={`dt-${key}`}>{key}</dt>,
           <dd key={`dd-${key}`}><REPLValue reprValue={value} /></dd>
         ]
       )}
      {postfix}
    </dl>
  );
}
ObjValue.propTypes = REPLValueProps(React.PropTypes.shape({
  type: React.PropTypes.string,
  keyValues: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string,
    value: React.PropTypes.object,
  }))
}));

function DataValue() {
  return <span>Data</span>;
}

function StandardOut({reprValue, postfix}) {
  return <span>stdout: {reprValue.value}{postfix}</span>;
}
StandardOut.propTypes = REPLValueProps(ReprValueProp(React.PropTypes.string));

function StandardError({reprValue, postfix}) {
  return <span>stderr: {reprValue.value}{postfix}</span>;
}
StandardError.propTypes = REPLValueProps(ReprValueProp(React.PropTypes.string));

const RENDERERS = {
  opaque: OpaqueValue,
  cyclic: CyclicValue,
  image: ImageValue,
  number: NumberValue,
  nothing: NothingValue,
  boolean: BooleanValue,
  string: StringValue,
  method: MethodValue,
  func: FuncValue,
  array: ArrayValue,
  ref: RefValue,
  tuple: TupleValue,
  object: ObjValue,
  data: DataValue,
  lazy: LazyValue,
  "lazy-iter": LazyIterValue,
  stdout: StandardOut,
  stderr: StandardError,
};


export default function REPLValue(props) {
  props = Object.assign({expansionFuel: { breadth: 5, depth: 5 }}, props);
  const {reprValue, expansionFuel, style} = props;
  var renderer = typeof reprValue === "object" && RENDERERS[reprValue.type];
  if (!renderer) {
    return <span>{`UNRENDERABLE: ${JSON.stringify(reprValue)}`}</span>;
  }
  return React.createElement(renderer, props);
}
REPLValue.propTypes = REPLValueProps(React.PropTypes.shape({
  type: React.PropTypes.oneOf(Object.keys(RENDERERS)),
}));
