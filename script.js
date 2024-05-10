//  git status                 -- checks status of saved files
//  git add .                  -- add all files into ready for commit 
//  git commit -m "COMMENT"    -- creates a commit with a comment
//  git push -u origin master  -- commits to online Repo (MASTER)

const diction1 = [
{Type: 'Cat', Name:'Felix', Age:'5'},
{Type: 'Dog', Name:'Max', Age:'8'},
{Type: 'Snake', Name:'Slither', Age:'12'},
{Type: 'Mouse', Name:'Micky', Age:'125'},
{Type: 'Hamster', Name:'Furball', Age:'2'},
{Type: 'Bird', Name:'Polly', Age:'16'}
];
//const passwordData = [{}];

let count = 0;


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

    diction1[count] = { Input1: answerType, input2: answerAge, Input3: answerName}

    count ++;

    document.getElementById("Text3").innerHTML = "TYPE:  " + answerType
    document.getElementById("Text4").innerHTML = "NAME:  " + answerAge
    document.getElementById("Text5").innerHTML = "AGE:  "  + answerName

}

diction1.forEach(diction1 => console.log(diction1))

document.getElementById("list1").innerHTML = "Type " + diction1[0].Type +" Name "+ diction1[0].Name +" Age "+ diction1[0].Age;
document.getElementById("list2").innerHTML = "Type " + diction1[1].Type +" Name "+ diction1[1].Name +" Age "+ diction1[1].Age;
document.getElementById("list3").innerHTML = "Type " + diction1[2].Type +" Name "+ diction1[2].Name +" Age "+ diction1[2].Age;
document.getElementById("list4").innerHTML = "Type " + diction1[3].Type +" Name "+ diction1[3].Name +" Age "+ diction1[3].Age;
document.getElementById("list5").innerHTML = "Type " + diction1[4].Type +" Name "+ diction1[4].Name +" Age "+ diction1[4].Age;
document.getElementById("list6").innerHTML = "Type " + diction1[5].Type +" Name "+ diction1[5].Name +" Age "+ diction1[5].Age;

//for(let i=0; i < diction1.length ; i++){
    //document.getElementById('Div1').innerHTML = '<ol><li>likes fish</li></ol>';
//    }

//document.getElementById("Text2").innerHTML = "ANIMAL INFO:";
//document.getElementById("Text4").innerHTML = "TYPE: " 
//document.getElementById("Text5").innerHTML = "NAME: " 
//document.getElementById("Text6").innerHTML = "AGE: " 


//document.getElementById("Text4").innerHTML = "dog" //diction1[0]['Input1']
//document.getElementById("Text5").innerHTML = diction1[1]['Input1']
//document.getElementById("Text6").innerHTML = diction1[2]['Input1']
//document.getElementById("Text2").innerHTML = diction1['dog']
//document.getElementById("Text2").innerHTML = test2

//console.log(diction1)

