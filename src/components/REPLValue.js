import React from 'react';

class Lazy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.expand = this.expand.bind(this);
  }
  expand() {
    this.setState({value: this.props.value.getValue()});
  }
  render() {
    if (this.state.value === null) {
      return <span onClick={this.expand}>&lt;click to expand&gt;</span>;
    } else {
      return <REPLValue value={this.state.value}/>;
    }
  }
}
Lazy.propTypes = {value: React.PropTypes.object};

function Opaque() {
  return <span>&lt;opaque&gt;</span>;
}

function Cyclic() {
  return <span>&lt;cyclic&gt;</span>;
}

function Image() {
  return <span>Image</span>;
}

function Number({value}) {
  return <span>{value.value}</span>;
}
Number.propTypes = {value: React.PropTypes.object};

function Nothing() {
  return <span>&lt;nothing&gt;</span>;
}
Nothing.propTypes = {value: React.PropTypes.object};

function Boolean({value}) {
  return <span>{value.value ? "true" : "false"}</span>;
}
Boolean.propTypes = {value: React.PropTypes.object};

function String({value}) {
  return <span>"{value.value}"</span>;
}
String.propTypes = {value: React.PropTypes.object};

function Method() {
  return <span>&lt;method&gt;</span>;
}

function Func() {
  return <span>&lt;func&gt;</span>;
}

function Array({value}) {
  return (
    <span>
      [
      {value.values.map((item, index) => (
         <span><REPLValue value={item}/>{index < value.values.length - 1 && ", "}</span>
       ))}
         ]
    </span>
  );
}
Array.propTypes = {value: React.PropTypes.object};

function Ref() {
  return <span>Ref</span>;
}

function Tuple({value}) {
  return (
    <span>
      (
      {value.values.map((item, index) => (
         <span><REPLValue value={item}/>{index < value.values.length - 1 && ", "}</span>
       ))}
         )
    </span>
  );
}
Tuple.propTypes = {value: React.PropTypes.object};

function Obj() {
  return <span>Object</span>;
}

function Data() {
  return <span>Data</span>;
}


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
};


export default function REPLValue({value}) {
  var renderer = typeof value === "object" && RENDERERS[value.type];
  if (!renderer) {
    return <span>{value.toString()}</span>;
  }
  return React.createElement(renderer, {value});
}
REPLValue.propTypes = {
  value: React.PropTypes.shape({
    type: React.PropTypes.oneOf([
      'opaque',
      'cyclic',
      'image',
      'number',
      'nothing',
      'text',
      'boolean',
      'string',
      'method',
      'func',
      'array',
      'ref',
      'tuple',
      'object',
      'data'
    ]),
  })
};
