// leetcode/medium/2637. Promise Time Limit
// 2637-promise-time-limit
// URL: https://leetcode.com/problems/promise-time-limit/description/

type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const timeoutPromise = new Promise((_, reject) => {
      const id = setTimeout(() => {
        clearTimeout(id);
        reject(new Error('Time Limit Exceeded'));
      }, t + 1);
    });

    return Promise.race([
      fn(...args),
      timeoutPromise,
    ]);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // 'Time Limit Exceeded' at t=100ms
 */
