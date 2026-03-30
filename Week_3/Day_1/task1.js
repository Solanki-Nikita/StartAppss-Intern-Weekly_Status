 // Select DOM elements for the to-do list application, including the form, input fields, task lists, and status message display

 
const form = document.querySelector(".todoform");
const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const completeList = document.getElementById("completeList");
const pendingList = document.getElementById("pendingList");
const statusMsg = document.getElementById("statusMsg");

// Event listener for form submission to add a new task to the pending list
form.addEventListener("submit", function (e) {
        e.preventDefault();
// Get the task text and date from the input fields, trim any whitespace, and validate that the task text is not empty before creating a new task
        const taskText = taskInput.value.trim();
        const taskDate = dateInput.value;
// If the task text is empty, display a status message prompting the user to enter a task and return early to prevent creating an empty task
        if(taskText === ""){
            statusMsg.textContent = "Please Enter a Task..";
            return;
        }
// If the task text is valid, call the createTask function to add the new task to the pending list and update 
// the status message to indicate that the task has been added. Finally, clear the input fields for the next task entry
        createTask(taskText, taskDate);

        statusMsg.textContent = "Task Added!";
        taskInput.Value= "";
        dateInput.value= "";
});
// Function to create a new task item in the pending list with complete and delete buttons, 
// and attach event listeners to those buttons to handle task completion and deletion
function createTask(text, date){
    const li = document.createElement("li");
    
 
    li.innerHTML = ` 
    <span>${text} ${date ? "(" + date + ")" : ""}</span>
    <div>
        <button class="completeBtn"> Complete</button>
        <button class="deleteBtn"> Delete </button>
    </div>
    `;

// Append the newly created task item to the pending list in the DOM 
// using appendChild, which adds the new task as a child element of the pending list
    pendingList.appendChild(li);

    const completeBtn = li.querySelector(".completeBtn");
    const deleteBtn = li.querySelector(".deleteBtn");

    completeBtn.addEventListener("click",function () {
        completeList.appendChild(li);
        completeBtn.remove();
        statusMsg.textContent = "Task Complete";
    });

    deleteBtn.addEventListener("click", function() {
        li.remove();
        statusMsg.textContent = "Task Deleted!"
    });
}