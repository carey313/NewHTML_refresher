//let greeting = 'Hello';
//alert(greeting+' World');

let submitButton = document.querySelector('#submit-button');
console.log(submitButton);

function emailValidate(email) {
	if(email.includes('@')) {
		console.log('email contains an @');
//    	alert('good at this point with an @');
    	return true;
	}else{
		console.log('email does not contains an @');
//    	alert('email does not contains an @');
    	return false;
	}
	//return email.includes('@');
}

function clickListener(event) {
  	event.preventDefault();
  	console.log('Button clicked');
  	//alert('Button clicked');

	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	if(emailValidate(emailText)){
		console.log('email:' + emailText + 'message:' + messageText);
	 	alert('Submit button clicked\nemail: '+ emailText + ' Validated\n message: ' + messageText);
	}
}

submitButton.addEventListener('click', clickListener);