const array1 = [' Cat ', ' Dog ', ' Mouse '];
const diction1 = [{}];

const txtBox1 = document.getElementById("inputValue1")
const out1 = document.getElementById("Text2")

let animal = 'dog'
let animal2 = 'dog2'

array1.push(' Lemon ')
diction1[animal] = 'MAX'
diction1[animal2] = 'Bruno'


function turnButtonGreen() {
    let elem = document.getElementById("Text1");
    elem.style.color = 'Green';
    document.getElementById("Text1").innerHTML = "The text is now Green"
}

function turnButtonRed() {
    let elem = document.getElementById("Text1");
    elem.style.color = 'Red';
    document.getElementById("Text1").innerHTML = "The text is now Red"
}

function turnButtonBlue() {
    let elem = document.getElementById("Text1");
    elem.style.color = 'Blue';
    document.getElementById("Text1").innerHTML = "The text is now Blue"
}

function saveButton() {
    out1.innerHTML = txtBox1.value;
    array1.push(txtBox1.value)
}



document.getElementById("Text3").innerHTML = array1
//document.getElementById("Text2").innerHTML = diction1['dog']
//document.getElementById("Text2").innerHTML = test2

console.log()