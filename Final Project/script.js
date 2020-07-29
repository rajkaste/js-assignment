var quotes = [`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." <br />  - Albert Einstein`, `"the people who are crazy enough to think they can change the world are the ones who do." <br /> - Steve Jobs`, `"A man who dares to waste one hour of time has not discovered the value of life." <br /> - Charles Darwin`, `"You cannot teach a man anything; you can only help him discover it in himself." <br /> - Galileo`, `"If I have seen further it is by standing on the shoulders of Giants." <br /> - Isaac Newton`, `"One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away." <br /> - Stephen Hawking`, `"Imagination is more important than knowledge." <br /> - Albert Einstein`, `"The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom." <br /> - Isaac Asimov`, `"Faith is not belief without proof, but trust without reservation." <br /> - D. Elton Trueblood`, `"There's an important difference between giving up and letting go." <br /> - Jessica Hatchigan `, `"I think everybody should get rich and famous and do everything they ever dreamed of so they can see that it's not the answer." <br /> - Jim Carrey `];

function newQuote(){
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum];
}

// select everything
// select the todo-form
const todoForm = document.querySelector('.todo-form');
// select the input box
const todoInput = document.querySelector('.todo-input');
// select the <ul> with class="todo-items"
const todoItemsList = document.querySelector('.todo-items');

// array which stores every todos
let todos = [];

// add an eventListener on form, and listen for submit event
todoForm.addEventListener('submit', function (event) {
    // prevent the page from reloading when submitting the form
    event.preventDefault();
    addTodo(todoInput.value); // call addTodo function with input box current value
});

// function to add todo
function addTodo(item) {
    // if item is not empty
    if (item !== '') {
        // make a todo object, which has id, name, and completed properties
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
        };

        // then add it to todos array
        todos.push(todo);
        addToLocalStorage(todos); // then store it in localStorage

        // finally clear the input box value
        todoInput.value = '';
    }
}

// function to render given todos to screen
function renderTodos(todos) {
    // clear everything inside <ul> with class=todo-items
    todoItemsList.innerHTML = '';

    // run through each item inside todos
    todos.forEach(function (item) {
        // check if the item is completed
        const checked = item.completed ? 'checked' : null;

        // make a <li> element and fill it
        // <li> </li>
        const li = document.createElement('li');
        // <li class="item"> </li>
        li.setAttribute('class', 'item');
        // <li class="item" data-key="20200708"> </li>
        li.setAttribute('data-key', item.id);
        /* <li class="item" data-key="20200708"> 
              <input type="checkbox" class="checkbox">
              Go to Gym
              <button class="delete-button">X</button>
            </li> */
        // if item is completed, then add a class to <li> called 'checked', which will add line-through style
        if (item.completed === true) {
            li.classList.add('checked');
        }

        li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
        // finally add the <li> to the <ul>
        todoItemsList.append(li);
    });

}

// function to add todos to local storage
function addToLocalStorage(todos) {
    // conver the array to string then store it.
    localStorage.setItem('todos', JSON.stringify(todos));
    // render them to screen
    renderTodos(todos);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    // if reference exists
    if (reference) {
        // converts back to array and store it in todos array
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}

// toggle the value to completed and not completed
function toggle(id) {
    todos.forEach(function (item) {
        // use == not ===, because here types are different. One is number and other is string
        if (item.id == id) {
            // toggle the value
            item.completed = !item.completed;
        }
    });

    addToLocalStorage(todos);
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
    // filters out the <li> with the id and updates the todos array
    todos = todos.filter(function (item) {
        // use != not !==, because here types are different. One is number and other is string
        return item.id != id;
    });

    // update the localStorage
    addToLocalStorage(todos);
}

// initially get everything from localStorage
getFromLocalStorage();

// after that addEventListener <ul> with class=todoItems. Because we need to listen for click event in all delete-button and checkbox
todoItemsList.addEventListener('click', function (event) {
    // check if the event is on checkbox
    if (event.target.type === 'checkbox') {
        // toggle the state
        toggle(event.target.parentElement.getAttribute('data-key'));
    }

    // check if that is a delete-button
    if (event.target.classList.contains('delete-button')) {
        // get id from data-key attribute's value of parent <li> where the delete-button is present
        deleteTodo(event.target.parentElement.getAttribute('data-key'));
    }
});