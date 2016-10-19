import React from "react";
import "babel-polyfill";
import {LanguageError, HoverHighlight} from "../pyret-ide";
import {makeHighlight as h} from "../util";

const OPS = {
  '-': (a,b) => a() - b(),
  '+': (a,b) => a() + b(),
  '/': (a,b) => a() / b(),
  '*': (a,b) => a() * b(),
  '^': (a,b) => Math.pow(a(), b()),
};

function parseLine(src, lineNo) {
  var infix = src.replace(/\s+/g, ''); // remove spaces, so infix[i]!=" "

  var stack = [];
  const PRECEDENCE = {"^":4, "*":3, "/":3, "+":2, "-":2};
  const ASSOCIATIVITY = {
    "^":"Right",
    "*":"Left",
    "/":"Left",
    "+":"Left",
    "-":"Left"
  };
  var token;
  var postfix = [];
  var o1, o2;

  function isNum(token) {
    return token >= "0" && token <= "9" || token == '.';
  }

  for (var i = 0; i < infix.length; i++) {
    token = infix[i];
    if (isNum(token)) {
      // token is part of an operand
      var prev = infix[i - 1];
      if (prev && isNum(prev[0])) {
        postfix[postfix.length - 1] += token;
      } else {
        postfix.push(token);
      }
    } else if (OPS[token]) {
      // token is an operator
      o1 = token;
      o2 = stack[stack.length - 1];
      while (OPS[o2] && (
        // while operator token, o2, on top of the stack
        // and o1 is left-associative and its precedence is
        // less than or equal to that of o2
        (ASSOCIATIVITY[o1] == "Left" && (PRECEDENCE[o1] <= PRECEDENCE[o2])) ||
        // or o1 is right-associative and its precedence is less than that of o2
        (ASSOCIATIVITY[o1] == "Right" && (PRECEDENCE[o1] < PRECEDENCE[o2]))
      )){
        postfix.push(o2);
        stack.pop();
        o2 = stack[stack.length - 1];
      }
      stack.push(o1);
    } else if (token == "(") {
      stack.push(token);
    } else if (token == ")") {
      while (stack[stack.length - 1] != "("){
        // move token from top of stack to output queue until we hit (
        postfix.push(stack.pop());
      }
      stack.pop(); // pop (, but not onto the output queue
    } else {
      throw new LanguageError(
        <div>Error at &nbsp;
          <HoverHighlight
            color="pink"
            target="definitions://"
            highlights={[
              h("pink", [lineNo, i, lineNo, i + 1])
            ]}
          >
            this spot
          </HoverHighlight>
        </div>);
    }
  }
  while (stack.length > 0){
    postfix.push(stack.pop());
  }

  return postfix;
}

// how long to "wait" at each step of the execution process
// to simulate asyncrhonous execution
const FAKE_TIMEOUT = 0;

export default {

  parse(src) {
    return new Promise((resolve, reject) => {
      if (!src) {
        return reject(new Error("no source code provided"));
      }

      try {
        var lines = src.split('\n').map(parseLine).filter(ast => ast.length > 0);
        window.setTimeout(() => resolve(lines), FAKE_TIMEOUT);
      } catch(err) {
        reject(err);
      }
    });
  },

  compile(astLines) {
    return new Promise((resolve, reject) => {
      if (!astLines) {
        reject(new Error("no ast provided"));
      }
      var compiledLines = astLines.map(ast => {
        ast = ast.slice();
        function comp() {
          var next = ast.pop();
          if (OPS[next]) {
            var b = comp(ast);
            var a = comp(ast);
            return OPS[next].bind(null, a, b);
          } else {
            return () => parseFloat(next);
          }
        }
        return comp(ast);
      });
      window.setTimeout(() => resolve(compiledLines), FAKE_TIMEOUT);
    });
  },

  execute(bytecodeLines, stdout) {
    return new Promise((resolve, reject) => {
      if (!bytecodeLines) {
        reject(new Error("No bytecode provided"));
      }
      const allResults = [];
      function runNextLine(lines) {
        if (lines.length == 0) {
          resolve(allResults.join('\n'));
          return;
        }
        var bytecode = lines[0];
        var result = bytecode();
        stdout('' + result);
        allResults.push(result);
        window.setTimeout(() => runNextLine(lines.slice(1)), FAKE_TIMEOUT);
      }
      runNextLine(bytecodeLines);
    });
  },

  stop() {
    console.warn("Not Implemented yet");
  }
};
