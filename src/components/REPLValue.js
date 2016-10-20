import React from 'react';

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
  stdout: StandardOut,
  stderr: StandardError,
};


export default function REPLValue({reprValue}) {
  var renderer = typeof reprValue === "object" && RENDERERS[reprValue.type];
  if (!renderer) {
    return <span>{`UNRENDERABLE: ${JSON.stringify(reprValue)}`}</span>;
  }
  return React.createElement(renderer, {reprValue});
}
REPLValue.propTypes = {
  reprValue: React.PropTypes.shape({
    type: React.PropTypes.oneOf(Object.keys(RENDERERS)),
  })
};
