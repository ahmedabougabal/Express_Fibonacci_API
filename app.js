const express = require('express')

const app = express();

let port = 8080;

let fib = (fibNum) => {
  if (fibNum <= 1) {
    return 1;
  }
  return fib(fibNum - 1) + fib(fibNum - 2);
}

app.get('/fibonacci', (req, res) => {
  const number = 20;
  const result = fib(number);
  console.log(`Fibonacci result for the number ${number} is ${result}`);
  res.send(`Fibonacci result for the number ${number} is ${result}`);
});

app.listen(port, () => {
  console.log("server is up and running at port http://localhost:8080)")
});


