function add(a, b) {
    return a + b;
}

function displaySum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = add(num1, num2);
    document.getElementById('result').innerText = `Result: ${result}`;
}

module.exports = { add };