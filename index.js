/* need to select button first and add event listener that listens to when a button is clicked
* when button is clicked, will call the handleClick() button
*/

// detecting button press on website screen
for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        

        var buttonInnerHTML = this.innerHTML; // switching on the bases of innerHTML of the button
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}


// detecting key pressed on keyboard
document.addEventListener('keydown', function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// detect keyboard presses using keyDown/keyPress

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            console.log(buttonInnerHTML);
    }


};

// button animation when key is clicked - want the letter to flash when clicked

function buttonAnimation( currentKey ){

    // there's an animation style that has been already added as a class in styles.css
    // we want to add that class to than active button
    // to create the animation effect, we will delay for a couple of secs and then remove it from the key's classlist to being it back to normal

    var activeBtn = document.querySelector("."+ currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);

    
}

/*function that does something when button is clicked
function handleClick(){
    alert("You clicked a button");
}*/