var todos = [];
var input = prompt("What would you like to do?");
while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addNewTodo();
    } else if (input === "delete") {
        removeTodo();
    }
    input = prompt("What would you like to do?");
}

console.log("You quit the app");

function listTodos() {
    console.log("*********");
    todos.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("*********");
}

function addNewTodo() {
    todos.push(prompt("Enter a new todo"));
    console.log("Added todo");
}

function removeTodo() {
    var delIndex = prompt("Enter the id of the todo you want to delete");
    todos.splice(delIndex, 1);
    console.log("Deleted todo");
}
