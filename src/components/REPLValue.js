import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actionCreators';
import * as selectors from '../redux/selectors';

class LazyValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reprValue: null
    };
    this.expand = this.expand.bind(this);
  }
  expand() {
    this.setState({reprValue: this.props.reprValue.getValue()});
  }
  render() {
    if (this.state.reprValue === null) {
      return <button onClick={this.expand}>&lt;click to expand&gt;</button>;
    } else {
      return <REPLValue reprValue={this.state.reprValue} />;
    }
  }
}
LazyValue.propTypes = {reprValue: React.PropTypes.object};

class LazyIterValueEl extends React.Component {
  static propTypes = {
    expansionFuel: React.PropTypes.shape({
      breadth: React.PropTypes.number.isRequired,
      depth: React.PropTypes.number.isRequired,
    }).isRequired,
    reprValue: React.PropTypes.object,
    executeHostCallable: React.PropTypes.func,
  };
  state = { values: [] }
  get remainingSize() {
    return this.props.reprValue.size - this.state.values.length;
  }
  componentDidMount() {
    this.expand();
  }
  expand = () => {
    const loop = (curBreadth, renderedValues) => {
      if(curBreadth < this.props.expansionFuel.breadth 
        && curBreadth < this.remainingSize) {
        this.props.executeHostCallable(
          this.props.reprValue.callable,
          (renderedValue) => {
            loop(curBreadth + 1, renderedValues.concat([renderedValue]));
          }
        );
      }
      else {
        this.setState({values: this.state.values.concat(renderedValues)});
      }
    }
    loop(0, []);
  }
  render() {
    return (
      <span>
        {this.props.reprValue.name}
        {this.state.values.map((rv, ix) => (
          <div key={ix} style={{marginLeft: 10}}>
            <REPLValue
              expansionFuel={{
                breadth: this.props.expansionFuel.depth,
                depth: 0
              }}
              reprValue={rv} />
          </div>
        ))}
        <button disabled={this.props.isRunning} onClick={this.expand}>
          {this.remainingSize} items
        </button>
      </span>
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

const NumberProp = React.PropTypes.oneOfType([
  React.PropTypes.shape({
    numerator: React.PropTypes.number,
    denominator: React.PropTypes.number,
    whole: React.PropTypes.number,
    fractional: React.PropTypes.number,
    repeating: React.PropTypes.number,
  })
]);

const ReprValueProp = (valuePropType) => React.PropTypes.shape({
  type: React.PropTypes.string.isRequired,
  value: valuePropType
});

class NumberValue extends React.Component {
  static propTypes = {
    reprValue: ReprValueProp(NumberProp)
  };

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
    return <span>{this.props.reprValue.value}</span>;
  }
}

function NothingValue() {
  return <span>&lt;nothing&gt;</span>;
}
NothingValue.propTypes = {reprValue: React.PropTypes.object};

function BooleanValue({reprValue}) {
  return <span>{reprValue.value ? "true" : "false"}</span>;
}
BooleanValue.propTypes = {reprValue: React.PropTypes.object};

function StringValue({reprValue}) {
  return <span>{`"${reprValue.value}"`}</span>;
}
StringValue.propTypes = {reprValue: React.PropTypes.object};

function MethodValue() {
  return <span>&lt;method&gt;</span>;
}

function FuncValue() {
  return <span>&lt;func&gt;</span>;
}

function ArrayValue({reprValue}) {
  return (
    <span>
      [
      {reprValue.values.map((item, index) => (
        <span>
          <REPLValue reprValue={item} />
          {index < reprValue.values.length - 1 && ", "}
        </span>
       ))}
         ]
    </span>
  );
}
ArrayValue.propTypes = {reprValue: React.PropTypes.object};

function RefValue() {
  return <span>Ref</span>;
}

function TupleValue({reprValue}) {
  return (
    <span>
      (
      {reprValue.values.map((item, index) => (
        <span>
          <REPLValue reprValue={item} />
          {index < reprValue.values.length - 1 && ", "}
        </span>
       ))}
         )
    </span>
  );
}
TupleValue.propTypes = {reprValue: React.PropTypes.object};

function ObjValue({reprValue}) {
  return (
    <dl>
      {reprValue.keyValues.map(
         ({key, value}) => [
           <dt key={`dt-${key}`}>{key}</dt>,
           <dd key={`dd-${key}`}><REPLValue reprValue={value} /></dd>
         ]
       )}
    </dl>
  );
}
ObjValue.propTypes = {reprValue: React.PropTypes.shape({
  type: React.PropTypes.string,
  keyValues: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string,
    value: React.PropTypes.object,
  }))
})};

function DataValue() {
  return <span>Data</span>;
}

function StandardOut({reprValue}) {
  return <span>stdout: {reprValue.value}</span>;
}
StandardOut.propTypes = {
  reprValue: ReprValueProp(React.PropTypes.string),
};

function StandardError({reprValue}) {
  return <span>stderr: {reprValue.value}</span>;
}
StandardError.propTypes = {
  reprValue: ReprValueProp(React.PropTypes.string),
};


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


export default function REPLValue({reprValue, expansionFuel}) {
  if(!expansionFuel) {
    expansionFuel = { breadth: 5, depth: 5 };
  }
  var renderer = typeof reprValue === "object" && RENDERERS[reprValue.type];
  if (!renderer) {
    return <span>{`UNRENDERABLE: ${JSON.stringify(reprValue)}`}</span>;
  }
  return React.createElement(renderer, {reprValue, expansionFuel});
}
REPLValue.propTypes = {
  expansionFuel: React.PropTypes.shape({
    breadth: React.PropTypes.number.isRequired,
    depth: React.PropTypes.number.isRequired,
  }),
  reprValue: React.PropTypes.shape({
    type: React.PropTypes.oneOf(Object.keys(RENDERERS)),
  })
};
