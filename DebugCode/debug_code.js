function performOperation() {
    // get use input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    // check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // perform the operation
        let result = multiply(num1,num2);
        displayResult(result);
    } else {
        displayResult('Please Enter Valid Numbers!');
    }
}

function multiply(a,b) {
    // introduce a debugger statement to pause execution
    debugger;
    return a*b;
}

function displayResult(result) {
    // display the result in the paragraph element
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `The result is: ${result}`;
}