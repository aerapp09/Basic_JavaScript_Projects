function slice_Method() { //defines the function name
    var Sentence = "All work and no play makes Johnny a dull boy."; //creates variable defined as string
    var Section = Sentence.slice(36,40); //defins variable as a string that uses .slice() method to slice the string between numbers
    document.getElementById("Slice").innerHTML = Section; //takes the previous defined variable and outputs it into Slice id to HTML
}