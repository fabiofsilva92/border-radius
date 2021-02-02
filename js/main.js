/* document.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    var key = event.key || event.keyCode;

    if (key === 13) {
        myFunction();
    }

}); */

function myFunction() {
    var topRight = document.getElementById('tr-inpt');
    var topLeft = document.getElementById('tl-inpt');
    var bottomRight = document.getElementById('br-inpt');
    var bottomLeft = document.getElementById('bl-inpt');


    document.getElementById("radius-surface").style.borderTopRightRadius = `${topRight.value}%`;
    document.getElementById("radius-surface").style.borderTopLeftRadius = `${topLeft.value}%`;
    document.getElementById("radius-surface").style.borderBottomRightRadius = `${bottomRight.value}%`;
    document.getElementById("radius-surface").style.borderBottomLeftRadius = `${bottomLeft.value}%`;
}



/* function alertfunction() {
    alert("You pressed a key");
} */