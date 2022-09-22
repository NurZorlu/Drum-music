var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i=0; i < numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function handleClick(){

        var buttonLetters = this.innerHTML;

        makeSound(buttonLetters);
        buttonAnimation(buttonLetters)

    
    });
    

}
 
document.addEventListener ("keydown", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
}); 


function makeSound(key) {
    

    switch (key) {
        case "w":
            var crash = new Audio ("sounds/crash.mp3")
            crash.play();
            break;
        
        case "a":
            var snare = new Audio ("sounds/snare.mp3")
            snare.play();
            break;

        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3")
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio ("sounds/tom-4.mp3")
            tom4.play();
            break;
        
        case "j":
            var tom1 = new Audio ("sounds/tom-1.mp3")
            tom1.play();
            break;

        case "k":
            var kickbass = new Audio ("sounds/kick-bass.mp3")
            kickbass.play();
            break;

        case "l":
            var tom2 = new Audio ("sounds/tom-2.mp3")
            tom2.play();
            break;
            
    
        default: console.log()
            
    }
}

function buttonAnimation (currentkey){
   var activebutton = document.querySelector("." + currentkey);

   activebutton.classList.add("pressed");

   setTimeout(function() {
    activebutton.classList.remove("pressed");
   }, 100);
        
}
