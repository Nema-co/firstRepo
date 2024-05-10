//  git status                 -- checks status of saved files
//  git add .                  -- add all files into ready for commit 
//  git commit -m "COMMENT"    -- creates a commit with a comment
//  git push -u origin master  -- commits to online Repo (MASTER)

/*
    Tasks
    =====
            1. Adding function that enters new dictionary object.
            2. Sorting function to put the dictionary in priority order.
            3. Change colour of P1 cells. 
            4. Edit and Delete function.

*/ 

const diction1 = [
    { toDoDesc: 'Wash the car.', toDoCatagory: 'Chore', toDoPriority: '4', toDoDeadline: '10/05/2024' },
    { toDoDesc: 'Walk the dog', toDoCatagory: 'Chore', toDoPriority: '2', toDoDeadline: '15/05/2024' },
    { toDoDesc: 'Code practice', toDoCatagory: 'Chore', toDoPriority: '1', toDoDeadline: '3/06/2024' },
    { toDoDesc: 'Family time', toDoCatagory: 'Leasure', toDoPriority: '1', toDoDeadline: '11/05/2024' },
    { toDoDesc: 'Brush teeth', toDoCatagory: 'Health and Fitness', toDoPriority: '2', toDoDeadline: '9/10/2024' },
    { toDoDesc: 'Go to the Gym', toDoCatagory: 'Health and Fitness', toDoPriority: '3', toDoDeadline: '22/07/2024' }
];

let count = 0;

function saveButton() {
    let toDo_Description = document.getElementById("inputValue1").value;
    let toDo_Catagory = document.getElementById("catagory").value;
    let toDo_Priority = document.getElementById("priority").value;
    let toDo_Deadline = document.getElementById("date1").value;
    let html = " <table>";

    //document.getElementById("textToDo1").innerHTML = toDo_Description
    //document.getElementById("textToDo2").innerHTML = toDo_Catagory
    //document.getElementById("textToDo3").innerHTML = toDo_Priority
    //document.getElementById("textToDo4").innerHTML = toDo_Deadline

    for (let i = 0; i < diction1.length; i++) {

        count = count + 1

        html += "<tr>";
        html += "<td>" + "" + count + " " + "</td>";
        html += "<td>" + "Description:   " + diction1[i].toDoDesc + " " + "</td>";
        html += "<td>" + "Catagory:      " + diction1[i].toDoCatagory + " " + "</td>";
        html += "<td>" + "Priority:      " + diction1[i].toDoPriority + " " + "</td>";
        html += "<td>" + "Deadline:      " + diction1[i].toDoDeadline + " " + "</td>";
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("list1").innerHTML = html

}

//diction1.forEach(diction1 => console.log(diction1))

//document.getElementById("list1").innerHTML = "Type " + diction1[0].Type +" Name "+ diction1[0].Name +" Age "+ diction1[0].Age;
//document.getElementById("list2").innerHTML = "Type " + diction1[1].Type +" Name "+ diction1[1].Name +" Age "+ diction1[1].Age;
//document.getElementById("list3").innerHTML = "Type " + diction1[2].Type +" Name "+ diction1[2].Name +" Age "+ diction1[2].Age;
//document.getElementById("list4").innerHTML = "Type " + diction1[3].Type +" Name "+ diction1[3].Name +" Age "+ diction1[3].Age;
//document.getElementById("list5").innerHTML = "Type " + diction1[4].Type +" Name "+ diction1[4].Name +" Age "+ diction1[4].Age;
//document.getElementById("list6").innerHTML = "Type " + diction1[5].Type +" Name "+ diction1[5].Name +" Age "+ diction1[5].Age;

/*

//const passwordData = [{}];


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

    //diction1[count] = { Input1: answerType, input2: answerAge, Input3: answerName}
    //count ++;

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
*/
