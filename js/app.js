
function addToFavorites() {
    // Implement adding to favorites functionality here
    alert("Added to favorites!");
}

function doFunction() {
    // Implement your desired functionality here
    alert("Button clicked!");
}
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Error! Invalid expression.');
    }
}

