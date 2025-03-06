function generateRandomNodeJSCode() {
  const num = Math.floor(Math.random() * 100) + 1;
  let code = `const ${num} = (a, b) => a + b;`;
  return code;
}
generateRandomNodeJSCode();
