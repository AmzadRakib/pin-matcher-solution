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