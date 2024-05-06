//  git status                 -- checks status of saved files
//  git add .                  -- add all files into ready for commit 
//  git commit -m "COMMENT"    -- creates a commit with a comment
//  git push -u origin master  -- commits to online Repo (MASTER)

const array1 = [' Cat ', ' Dog ', ' Mouse '];
const diction1 = [{}];
const passwordData = [{}];

const txtBox1 = document.getElementById("inputValue1")
const out1 = document.getElementById("Text2")

let animal = 'dog'
let animal2 = 'dog2'

array1.push(' Lemon ')
//diction1[animal] = 'MAX'
//diction1[animal2] = 'Bruno'
//diction1.option3 = 'Frank'


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
    let Input1 = "Type";
    let Input2 = "Age";
    let Input3 = "Name";

    answerType = document.getElementById("inputValue1").value
    answerAge = document.getElementById("inputValue2").value
    answerName = document.getElementById("inputValue3").value

    diction1[Input1] = answerType
    diction1[Input2] = answerAge
    diction1[Input3] = answerName

    document.getElementById("Text3").innerHTML = "ANIMAL INFO:";
    document.getElementById("Text4").innerHTML = "TYPE: " + diction1['Type'];
    document.getElementById("Text5").innerHTML = "NAME: " + diction1['Name'];
    document.getElementById("Text6").innerHTML = "AGE: " + diction1['Age'];
}



//document.getElementById("Text3").innerHTML = array1
//document.getElementById("Text2").innerHTML = diction1['dog']
//document.getElementById("Text2").innerHTML = test2

//console.log(diction1["Username"].Age)