// Creating elements

let container = document.querySelector('.container');





let addBtn = document.querySelector('.addButton');

// Event Listener

addBtn.addEventListener('click', () => {

    let noteDiv = document.createElement('div');
    let noteHeading = document.createElement('input');
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    // Adding classes
    noteDiv.classList.add('item');
    noteHeading.classList.add('item_input');
    editBtn.classList.add('editButton');
    deleteBtn.classList.add('deleteButton');

    // Appending elements

    container.appendChild(noteDiv);
    noteDiv.append(noteHeading, editBtn, deleteBtn);

    noteHeading.value = document.querySelector('.input').value;
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener('click', () => {
        noteDiv.remove();
    });
});

