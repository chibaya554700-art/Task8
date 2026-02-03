function append(character) {
    document.getElementById('display').value += character;
}


function delChar() {
    var disp = document.getElementById('display');
    disp.value = disp.value.slice(0, -1);
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function calculate() {
    var disp = document.getElementById('display');
    try {
        disp.value = eval(disp.value);
    } catch {
        disp.value = 'Error';
    }
}