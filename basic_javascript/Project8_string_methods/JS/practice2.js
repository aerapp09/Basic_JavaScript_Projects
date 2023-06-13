function upper_case() { //defines the function name
    var Sentence = "All work and no play makes Johnny a dull boy."; //creates variable defined as string
    var Section = Sentence.toUpperCase(); //defines variable as a string that uses .toUpperCase() method to uppercase the previous string variable
    document.getElementById("Upper").innerHTML = Section; //takes the previous defined variable and outputs it into  id to HTML
}

function search() { //defines the function name
    var Sentence = "All work and no play makes Johnny a dull boy."; //creates variable defined as string
    var Section = Sentence.search("play"); //defines variable as a string that uses .search() method to return the position of the first match
    document.getElementById("search").innerHTML = Section; //takes the previous defined variable and outputs it into  id to HTML
}

function string_Method() {
    var X = 182; //creates variable with number
    document.getElementById("Numbers_to_string").innerHTML= X.toString(); //converts number to string
}

function precision_Method() {
    var X = 1293423.1241235345345234;
    document.getElementById("Precision").innerHTML = X.toPrecision(10); //output to the ID in HTML and output that uses the .toPrecious(10) to make the number in the variable 10 places only of precion
}

function tofixed_Method() {
    var X = 56.1241235345345234;
    document.getElementById("to_fixed").innerHTML = X.toFixed(2); //output to the ID in HTML and output that uses the .toFixed to make the number in the variable 2 places after decimal
}

function valueof_Method() {
    var X = "Hello World";
    document.getElementById("Value_of").innerHTML= X.valueOf(); //output to the ID in HTML and outputs the primative value of the string
}