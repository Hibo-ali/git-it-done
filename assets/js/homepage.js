
// http request
var getUserRepos = function(user) {
    // format the github api url

    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a request to the url 
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });

};
// getUserRepos("user");

// Create two new variables to store a ref to the <form> el id of user-name
// and to the input el with an id of username

var userFormEl = document.querySelector("#user-form"); 

var nameInputEl = document.querySelector("#username");

// create function formSubmitHandler() to be executed upon a form submission 
// browser event

var formSubmittedHandler = function(event) {
    event.preventDefault();
    console.log(event);
};

// add the submit event listener to the userFormEl
userFormEl.addEventListener("submit", formSubmitHandler);