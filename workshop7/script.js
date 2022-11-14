'use strict';
const BOOKSKEY = 'users';
function saveUser() {
    
	const name = document.getElementById('name').value;
	const lastName = document.getElementById('lastName').value;
    const cellphone = document.getElementById('cellphone').value;
	// add it to the database

    const user = {
		name,
		lastName,
        cellphone
	};
    user.name=name;
    user.lastName=lastName;
    user.cellphone=cellphone;

    let users = JSON.parse(localStorage.getItem(BOOKSKEY));

    if (!users) {
        users = [];
      }

    users.push(user);


	localStorage.setItem(BOOKSKEY, JSON.stringify(users));


	clearFields();
}

function clearFields() {
	document.getElementById('name').value = '';
	document.getElementById('lastName').value = '';
	document.getElementById('cellphone').value = '';
}



/**
 * Binds the different events to the different elements of the page
 */
function bindEvents() {
	jQuery('#save-book-button').bind('click', function (element) {
		saveUser();
	});
}
bindEvents();