import React from "react";
import {storiesOf} from "@kadira/storybook";
import REPLValue from '../REPLValue';

var stories = storiesOf("REPL Values", module);

function REPLValueStory(props) {
  return (
    <div>
      <dl>
        <dt>Value (as JSON)</dt>
        <dd>
          <pre>{JSON.stringify(props.value, true, 2)}</pre>
        </dd>
        <dt>As it appears in a REPL</dt>
        <dd>
          <REPLValue {...props}/>
        </dd>
      </dl>
    </div>
  );
}
REPLValueStory.propTypes = REPLValue.propTypes;

[
  {type: 'opaque'},
  {type: 'cyclic'},
  {type: 'number', value: 1},
  {type: 'nothing'},
  {type: 'boolean', value: false},
  {type: 'string', value: "hello world"},
  {type: 'method'},
  {type: 'func'},
  {type: 'array', values: [
    {type: 'boolean', value: false},
    {type: 'boolean', value: true},
    {type: 'number', value: 1},
  ]},
  {type: 'tuple', values: [
    {type: 'boolean', value: false},
    {type: 'boolean', value: true},
    {type: 'number', value: 1},
  ]},
].forEach(
  value => stories.add(
    value.type,
    () => <REPLValueStory reprValue={value}/>
  )
);

stories.add(
  'Cyclical array',
  () => (
    <REPLValueStory reprValue={{type: 'array',
                            values: [
                              {type: 'number', value: 1},
                              {type: 'number', value: 2},
                              {type: 'cyclic'},
                            ]}}/>
  )
);

function lazyLinkedList(n) {
  return {
    type: 'array',
    values: [
      {type: 'number', value: n},
      {
        type: 'lazy',
        getValue() {
          return n > 0 ? lazyLinkedList(n - 1) : {type: 'nothing'};
        }
      },
    ],
  };
}
stories.add(
  'Lazy array',
  () => <REPLValueStory reprValue={lazyLinkedList(10)}/>
);
