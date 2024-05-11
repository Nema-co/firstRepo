//  git status                 -- checks status of saved files
//  git add .                  -- add all files into ready for commit 
//  git commit -m "COMMENT"    -- creates a commit with a comment
//  git push -u origin master  -- commits to online Repo (MASTER)

/*
    Tasks
    =====
            1. Adding function that enters new dictionary object. DONE
            2. Sorting function to put the dictionary in priority order.
            3. Change colour of P1 cells. 
            4. Edit and Delete function.

*/

const diction1 = [];
const doneListArray = []

let count = 0;

function subitButton() {
    let toDo_Description = document.getElementById("activityDetail").value;
    let toDo_Catagory = document.getElementById("catagory").value;
    let toDo_Priority = document.getElementById("priority").value;
    let toDo_Deadline = document.getElementById("date1").value;

    const objectToAdd = {
        toDoDesc: toDo_Description,
        toDoCatagory: toDo_Catagory,
        toDoPriority: toDo_Priority,
        toDoDeadline: toDo_Deadline
    }

    diction1.push(objectToAdd)

    displayObjectArray();

    document.getElementById("activityDetail").value = '';
    document.getElementById("catagory").value = '';
    document.getElementById("priority").value = '';
    document.getElementById("date1").value = '';

}

function displayObjectArray() {

    let html = " <table>";
    html += "  <tr><th>Number</th><th>Description</th><th>Catagory</th><th>Priority</th><th>Deadline</th></tr>";

    for (let i = 0; i < diction1.length; i++) {

        count = i
        count = count + 1

        html += "<tr>";
        html += "<td>" + "" + count + " " + "</td>";
        html += "<td>" + diction1[i].toDoDesc + " " + "</td>";
        html += "<td>" + diction1[i].toDoCatagory + " " + "</td>";
        html += "<td>" + diction1[i].toDoPriority + " " + "</td>";
        html += "<td>" + diction1[i].toDoDeadline + " " + "</td>";
        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("list1").innerHTML = html

};