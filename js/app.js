const addButton = document.querySelector('.add');
const saveButton = document.querySelector('.save');
const cancelButton = document.querySelector('.cancel');
const deleteAllButton = document.querySelector('.delete-all');
const deleteButtons = document.getElementsByClassName('.delete-note');
const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');
let selectedValue;
let cardID = 0;

const openPanel = () => {
	notePanel.style.display = 'flex';
};
const closePanel = () => {
	error.style.visibility = 'hidden';
	notePanel.style.display = 'none';
	category.selectedIndex = 0;
	textArea.value = '';
};
const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);
	newNote.innerHTML = `
	<div class="note-header">
		<h3 class="note-title">${selectedValue}</h3>
		<button class="delete-note" onclick="deleteNote(${cardID})">
			<i class="fas fa-times icon"></i>
		</button>
	</div>
	<div class="note-body">${textArea.value}</div>`;
	noteArea.appendChild(newNote);
	cardID++;
	checkColor(newNote);
};
const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const addNote = () => {
	if (
		category.options[category.selectedIndex].value !== '0' &&
		textArea.value !== ''
	) {
		createNote();
		closePanel();
	} else {
		error.style.visibility = 'visible';
	}
};
const checkColor = note => {
	switch (selectedValue) {
		case 'Shopping':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;
		case 'Work':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;
		case 'Others':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break;
	}
};
const deleteNote = id => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};
const deleteAllNotes = () => {
	noteArea.textContent = '';
};
addButton.addEventListener('click', openPanel);
cancelButton.addEventListener('click', closePanel);
saveButton.addEventListener('click', addNote);
deleteAllButton.addEventListener('click', deleteAllNotes);
