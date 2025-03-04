const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const getRandomOperation = () => {
  const operations = ["+", "-", "*", "/"];
  return operations[Math.floor(Math.random() * operations.length)];
};

const getRandomExpression = (maxNumber) => {
  const expression = `${getRandomNumber()} ${getRandomOperation()} ${getRandomNumber()} =`;
  if (expression.includes("*") || expression.includes("/")) {
    return `${getRandomNumber()} ${getRandomOperation()} ${getRandomNumber()}`;
  }
  return expression;
};

const getRandomHomework = () => {
  const homework = [];
  for (let i = 0; i < 10; i++) {
    homework.push(getRandomExpression());
  }
  return homework.join("\n");
};

console.log(getRandomHomework());
