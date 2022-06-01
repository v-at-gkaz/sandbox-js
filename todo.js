const todoList = [];

function main(){
    
    drawInterface();

    setEventsListeners();
}


function drawInterface(){
    
    // header
    const header=document.createElement('h1');
    header.innerHTML='My ToDo List';
    const body = document.body;
    body.prepend(header);

    const content=document.createElement('div');

    const input=document.createElement('input');
    input.setAttribute('id', 'todo-text');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Enter your text');

    const btn=document.createElement('button');
    btn.innerHTML = ' + ';
    btn.setAttribute('id', 'add-btn');

    listwrapper = document.createElement('div');
    listwrapper.setAttribute('id', 'list-wrapper');


    content.append(input);
    content.append(btn);
    content.append(listwrapper);

    body.append(content);

    updateList();

}

function updateList(){
    const listWr=document.getElementById('list-wrapper');
    const list=document.createElement('ul');
    const todos = getCurrentTodos();
    todos.forEach(todo=>{
        list.append(todo);
    });
    listWr.innerHTML = '';
    listWr.append(list);

    document.getElementById('todo-text').value = '';
}

function addToDoToList(){
    const todoElement = document.getElementById('todo-text');
    const newValue = todoElement.value;
    todoList.push(newValue);
    updateList();
}

function setEventsListeners(){
    const btn = document.getElementById('add-btn');
    btn.addEventListener('click', addToDoToList);
}

function getCurrentTodos(){
    const res = [];
    todoList.forEach(todo=>{
        const t = document.createElement('li');
        t.innerHTML = todo
        res.push(t);
    });
    return res;
}

document.onreadystatechange = () => {

    // console.log(document.readyState);

    if(document.readyState === 'interactive'){
        main();
    }
    
}