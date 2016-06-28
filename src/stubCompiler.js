import "babel-polyfill";

const OPS = {
  '-': (a,b) => a() - b(),
  '+': (a,b) => a() + b(),
  '/': (a,b) => a() / b(),
  '*': (a,b) => a() * b(),
  '^': (a,b) => Math.pow(a(), b()),
};

export default {

  parse(src) {
    return new Promise((resolve, reject) => {
      if (!src) {
        return reject(new Error("no source code provided"));
      }
      var infix = src.replace(/\s+/g, ''); // remove spaces, so infix[i]!=" "

      var stack = [];
      const PRECEDENCE = {"^":4, "*":3, "/":3, "+":2, "-":2};
      const ASSOCIATIVITY = {"^":"Right", "*":"Left", "/":"Left", "+":"Left", "-":"Left"};
      var token;
      var postfix = [];
      var o1, o2;

      for (var i = 0; i < infix.length; i++) {
        token = infix[i];
        if (token >= "0" && token <= "9") {
          // token is part of an operand
          var prev = infix[i - 1];
          if (prev && prev[0] >= "0" && prev[0] <= "9") {
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
        }
      }
      while (stack.length > 0){
        postfix.push(stack.pop());
      }

      resolve(postfix);
    });
  },

  compile(ast) {
    return new Promise((resolve, reject) => {
      if (!ast) {
        reject(new Error("no ast provided"));
      }
      function comp() {
        var next = ast.pop();
        if (OPS[next]) {
          return OPS[next].bind(null, comp(ast), comp(ast));
        } else {
          return () => parseInt(next);
        }
      }
      resolve(comp(ast));
    });
  },

  execute(bytecode) {
    return new Promise((resolve, reject) => {
      if (!bytecode) {
        reject(new Error("No bytecode provided"));
      }
      resolve(bytecode());
    });
  }
};