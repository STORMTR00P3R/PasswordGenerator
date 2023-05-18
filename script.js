let passwordsAmount = document.querySelector('#passwordsAmount');
let passwordLength  = document.querySelector('#passwordLength');
let passwordList    = document.querySelector('#passwordList');

let characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-={}][\|';:,./<>?'~";

function start() {
    var amount = passwordsAmount.value;
    var length = passwordLength.value;
    for (var i = 0; i < amount; i++) {
        passwordList.innerHTML += "\n"; // prepend every generator output
        var li = document.createElement("li");
        var password = "";
        for (var j = 0; j < length; j++) {
            var choice = Math.floor(Math.random() * characters.length);
            if (choice >= characters.length) {
                choice = characters.length - 1;
            }
            password += characters[choice];
        }
        li.innerHTML = password;
        passwordList.append(li);
    }
}