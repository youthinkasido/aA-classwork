toDos = [];
toDoList = document.getElementsByClassName('todos'); // <ul>
addToDo = document.getElementsByClassName('add-todo-form'); // form

function addToDo (event) {
    const toDoInput = document.getElementsByName('add-todo'); // input tags
    const toDoValue = toDoInput.value; // 

    const toDo = {
        value: toDoValue,
        done: false
    };
    
    const newToDo = Object.create(toDo);
    toDos.push(newToDo);

    toDoInput.value = "";
    populateList(toDos) // pass toDos array?
}

addToDo.addEventListener("submit", (e => {
    addToDo(e);
}));

function populateList(todos){ //populate  label, li, ul 
    todos.map(el=> {
        let li = document.createElement('li');
        let label = document.createElement('label');
        let checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox"); // <input type="checkbox"></input>

        li.appendChild(label);
        li.appendChild(checkbox);
        toDoList.appendChild(li);
        debugger
    }); // create label tags for each todo item in todos array

}


    // <li>
    //     <label
    //         <input type="checkbox"></input>
    // </li>
    

    // var array1 = [1, 4, 9, 16];

    // // pass a function to map
    // const map1 = array1.map(x => x * 2);

    // console.log(map1);
// expected output: Array [2, 8, 18, 32]
