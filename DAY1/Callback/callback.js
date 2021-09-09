// Asynchronous Callback Function

// The finishedHomework() is an eample of  Callback Function because it has to wait for doHomework() to complete



function doHomework(finishedHomework) {

	let subject = prompt("Which subject homework do you want to start?");

	return finishedHomework(subject);

}



function finishedHomework(subject) {

    alert(`${subject} Homework finished!! `);

}



doHomework(finishedHomework);