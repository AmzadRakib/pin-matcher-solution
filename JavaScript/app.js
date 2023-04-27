function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const generatePin = Math.round(Math.random() * 10000);
    return generatePin;
}

document.getElementById('btn-generate').addEventListener('click', function () {
    const pin = getPin()
    const generatePinField = document.getElementById('genrate-pin-field');
    generatePinField.value = pin;
})

document.getElementById('calculator-body').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const currentTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = currentTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }

    else {
        const updateTypedNumber = currentTypedNumber + number;
        typedNumberField.value = updateTypedNumber;
    }


})


document.getElementById('verify-pin').addEventListener('click', function () {
    const generatePinField = document.getElementById('genrate-pin-field')
    const currentPin = generatePinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;
    generatePinField.value = '';
    typedNumberField.value = '';
    const pinCorrectMessage = document.getElementById('pin-correct');
    const pinIncorrectMessage = document.getElementById('pin-incorrect');



    if (currentPin === typedNumber) {
        pinCorrectMessage.style.display = 'block';
        pinIncorrectMessage.style.display = 'none';
    }
    else {
        pinIncorrectMessage.style.display = 'block';
        pinCorrectMessage.style.display = 'none';
    }

})