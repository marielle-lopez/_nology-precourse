// completed in console

// HTML provides document object to interact with specific elements on page

// getElementsByTagName returns array of elements of 'p' tag
// get first 'p' element via indexing
// innerHTML allows us to change the text of the element
document.getElementsByTagName('p')[0].innerHTML = "I've been modified.";
document.getElementsByTagName('select')[0].value = "complaint";

// we can latch onto elements using their id via getElementById
document.getElementById('email').value = "test@test.com";