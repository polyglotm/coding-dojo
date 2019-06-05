function assertCheck(input, answer) {
  if (JSON.stringify(input) !== JSON.stringify(answer)) {
    console.log(input);
    console.log(answer);
    throw "not match";
  }
  
  return true;
}

export { assertCheck };
