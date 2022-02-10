const letters = document.querySelectorAll("#sanahi path");

let animationDelay = 0;
for(let i = 0; i < letters.length; i++){
    console.log(letters[i]);
    letters[i].style.strokeDasharray = letters[i].getTotalLength();
    letters[i].style.strokeDashoffset = letters[i].getTotalLength();
    letters[i].style.animation = `outline-animation 2.5s ease forwards ${animationDelay}s`;
    animationDelay = animationDelay + 0.5;
}