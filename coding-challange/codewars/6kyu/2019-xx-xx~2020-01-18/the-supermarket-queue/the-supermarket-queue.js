// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

const queueTime = (customers, n, queue = [0]) => {
  // make empty queue is bad algorithm
  // cause if n 10,000, customer is 1 will waste memory 9,999
  for (let i = 0; i < n; i += 1) {
    if (customers.length === 0) {
      // if customer is empty stop foo-loop.
      // if didn't and n 10,000 will gonna meaningless looping
      break;
    }
    if (queue.length === n) {
      const min = Math.min(...queue);
      const minIndex = queue.findIndex((v) => v === min);
      // is queue size is same with n should assign next customer to minimum line
      queue[minIndex] = queue[minIndex] + customers.shift();
    } else {
      // if queue have space just make new line
      queue[i] = (queue[i] || 0) + customers.shift();
    }
  }
  queue.sort();
  
  return customers.length ? queueTime(customers, n, queue) : Math.max(...queue);
};

let c1 = [13, 40, 26, 28, 31, 47, 22, 43, 47, 48, 4, 40, 28, 31, 40];
let n1 = 5;
console.log(queueTime(c1, n1));
// - Expected: 118, instead got: 128
