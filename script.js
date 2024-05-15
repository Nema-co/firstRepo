//  git status                 -- checks status of saved files
//  git add .                  -- add all files into ready for commit 
//  git commit -m "COMMENT"    -- creates a commit with a comment
//  git push -u origin master  -- commits to online Repo (MASTER)

/*
    Tasks
    =====
            1. Adding function that enters new dictionary object. DONE
            2. Sorting function to put the dictionary in priority order.
                a. add sort by priority
                b. add sort by date
            3. Change colour of P1 cells. 
            4. Edit and Delete function.
            5. Make date Auto and hidden.

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

//let testArray = [3, 6, 2, 12, 87, 7, 56, 2, 23, 1]
//let testArray = [55, 4, 21, 12, 7, 2, 106, 9, 33, 90]
//let testArray = [55, 4, 21, 12, 7, 2, 106, 9, 33, 90, 3, 6, 2, 12, 87, 7, 56, 2, 23, 1]
//let testArray = [55, 4, 21, 12, 7, 2, 106, 9, 33, 90, 3, 6, 2, 12, 87, 7, 56, 2, 23, 1, 7, 51, 32, 45,]
let testArray = [9, 10, 21, 22, 23, 11, 12, 18, 19, 20, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 24, 25]
let startTestArray = [9, 10, 21, 22, 23, 11, 12, 18, 19, 20, 13, 14, 15, 16, 17, 1, 2, 3, 4, 5, 6, 7, 8, 24, 25]


function sortToDoListOnPriority(array) {

    const leftSplitArray = [];
    const rightSplitArray = [];
    const sortedArray = [];
    let checkHighestNumber = 0;
    let pivotNumber = 0;

    // Find center of the array.
    for (let i = 0; i < array.length; i++) {
        if (array[i] > checkHighestNumber) { checkHighestNumber = array[i] }
    }
    pivotNumber = Math.round(checkHighestNumber / 2)


    // Split the array higher or lower than pivot.
    for (let i = 0; i < array.length; i++) {
        if (array[i] > pivotNumber) { rightSplitArray.push(array[i]) }
        else { leftSplitArray.push(array[i]) }
    }

    // sort each list
    bubbleSort(leftSplitArray)
    bubbleSort(rightSplitArray)

    let mergedList = leftSplitArray.concat(rightSplitArray);
    sortedArray.push(mergedList);

    return sortedArray
}

testArray = sortToDoListOnPriority(testArray)

console.log("Start list: " + startTestArray)
console.log("Final list: " + testArray)



function bubbleSort(arrayToBSort) {

    let placeholder1;
    let sortedFlag = false;
    let count = 0;

    //while (sortedFlag) {
    for (let x = 0; x < arrayToBSort.length; x++) {

        count = 0;
        for (let i = 0; i < arrayToBSort.length + 1; i++) {
            let j = i - 1
            if (arrayToBSort[j] > arrayToBSort[i]) {
                placeholder1 = arrayToBSort[i];
                arrayToBSort[i] = arrayToBSort[j];
                arrayToBSort[j] = placeholder1;

            }
            else if (arrayToBSort[j] < arrayToBSort[i]) {
                count++
            }
            if (count == arrayToBSort.length) { sortedFlag = true }
            console.log(arrayToBSort)
            console.log(count)
        }
    }


    //}
    //console.log("sorted list: " + arrayToBSort)

}
