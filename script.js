var gameNumber= 5;
guessNumber = prompt("In this game Your Mission is to guess the Number in My Mind!\n(Mujhe Pata Hai Aap Jadugar Nahi Hai\nFor Your Help: Try 1 to 10)\nEnter the Number:")
while (guessNumber!=gameNumber){
    guessNumber = prompt("Enter the Number:")
}
alert("CONGRATULATIONS! You Won!")

