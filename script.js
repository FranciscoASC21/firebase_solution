let usernameElement = document.querySelector("#username");
let messageElement = document.querySelector("#message");
let button = document.querySelector("#submitButton");
//Set database object REFERENCE here:
let database = firebase.database().ref();
/**
 * Updates the database with the username and message.
 */
button.onclick = function updateDB(event){
    event.preventDefault(); //stop refreshing
    let username        = usernameElement.value;
    let message         = messageElement.value;
    usernameElement.value = "";
    messageElement.value  = "";
    console.log(username + " : " + message);
    //Update database here
    let value = {
        NAME: username,
        MESSAGE: message
    }
    database.push(value);
}


// Set database "child_added" event listener here
let messageContainer = document.querySelector(".allMessages");
database.on("child_added",addMessageToBoard);
function addMessageToBoard(rowData){
    let row = rowData.val();
    let username = row.NAME;
    let message = row.MESSAGE;
    let pElement = document.createElement("p");
    pElement.innerHTML = username + ": " + message;
    messageContainer.appendChild(pElement);
}