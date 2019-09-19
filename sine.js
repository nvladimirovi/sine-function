module.exports = value => {
    const result = Math.sin(value);
    console.log(`the sine of ${value} is ${result}`);
    return result;
}