
//q1

var result = Math.random() < 0.5 ? "Hat" : "Tail";
alert("Result: " + result);

//q2

var roll = Math.floor(Math.random() * 6) + 1;
alert("You rolled a: " + roll);


//q3

var length = 10;
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
var password = '';

for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
}

alert("Generated Password: " + password);
