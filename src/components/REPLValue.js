import React from 'react';

class Lazy extends React.Component {
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
      return <span onClick={this.expand}>&lt;click to expand&gt;</span>;
    } else {
      return <REPLValue reprValue={this.state.reprValue}/>;
    }
  }
}
Lazy.propTypes = {reprValue: React.PropTypes.object};

function Opaque() {
  return <span>&lt;opaque&gt;</span>;
}

function Cyclic() {
  return <span>&lt;cyclic&gt;</span>;
}

function Image() {
  return <span>Image</span>;
}

class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showFraction: false};
    this.toggleFraction = this.toggleFraction.bind(this);
  }

  toggleFraction() {
    this.setState({showFraction: !this.state.showFraction});
  }

  render() {
    const reprValue = this.props.reprValue;
    if (typeof reprValue.value === "object") {
      const {
        numerator,
        denominator,
        whole,
        fractional,
        repeating
      } = reprValue.value;
      let text = `${whole}.${fractional}${repeating}`;
      if (this.state.showFraction) {
        text = `${numerator}/${denominator}`;
      }
      return (
        <span onClick={this.toggleFraction}>
          {text}
        </span>
      );
    }
    return <span>{reprValue.value}</span>;
  }
}
Number.propTypes = {
  reprValue: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
    value: React.PropTypes.oneOfType([
      React.PropTypes.shape({
        numerator: React.PropTypes.number,
        denominator: React.PropTypes.number,
        whole: React.PropTypes.number,
        fractional: React.PropTypes.number,
        repeating: React.PropTypes.number,
      })
    ])
  })
};

function Nothing() {
  return <span>&lt;nothing&gt;</span>;
}
Nothing.propTypes = {reprValue: React.PropTypes.object};

function Boolean({reprValue}) {
  return <span>{reprValue.value ? "true" : "false"}</span>;
}
Boolean.propTypes = {reprValue: React.PropTypes.object};

function String({reprValue}) {
  return <span>"{reprValue.value}"</span>;
}
String.propTypes = {reprValue: React.PropTypes.object};

function Method() {
  return <span>&lt;method&gt;</span>;
}

function Func() {
  return <span>&lt;func&gt;</span>;
}

function Array({reprValue}) {
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
Array.propTypes = {reprValue: React.PropTypes.object};

function Ref() {
  return <span>Ref</span>;
}

function Tuple({reprValue}) {
  return (
    <span>
      (
      {reprValue.values.map((item, index) => (
         <span>
           <REPLValue reprValue={item}/>
           {index < reprValue.values.length - 1 && ", "}
         </span>
       ))}
         )
    </span>
  );
}
Tuple.propTypes = {reprValue: React.PropTypes.object};

function Obj({reprValue}) {
  console.log("got repr values keyValues", reprValue.keyValues);

  return (
    <dl>
      {reprValue.keyValues.map(
         ({key, value}) => [
           <dt key={`dt-${key}`}>{key}</dt>,
           <dd key={`dd-${key}`}><REPLValue reprValue={value}/></dd>
         ]
       )}
    </dl>
  );
}
Obj.propTypes = {reprValue: React.PropTypes.shape({
  type: React.PropTypes.string,
  keyValues: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string,
    value: React.PropTypes.object,
  }))
})};

function Data() {
  return <span>Data</span>;
}

function StandardOut({reprValue}) {
  return <span>stdout: {reprValue.value}</span>;
}
StandardOut.propTypes = {
  reprValue: React.PropTypes.shape({
    value: React.PropTypes.string,
  }),
};

function StandardError({reprValue}) {
  return <span>stderr: {reprValue.value}</span>;
}
StandardError.propTypes = {
  reprValue: React.PropTypes.shape({
    value: React.PropTypes.string,
  }),
};


const RENDERERS = {
  opaque: Opaque,
  cyclic: Cyclic,
  image: Image,
  number: Number,
  nothing: Nothing,
  boolean: Boolean,
  string: String,
  method: Method,
  func: Func,
  array: Array,
  ref: Ref,
  tuple: Tuple,
  object: Obj,
  data: Data,
  lazy: Lazy,
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
