
//nested function
function Nested_Function() { //create function
    document.getElementById("Counting").innerHTML=Count(); //outputs the output of Count
    function Count() {
        var Starting_point = 9; //variable creation 
        function Plus_one() {Starting_point += 1;} //create another function that increases value of variable
        Plus_one(); //calls the function
        return Starting_point; //returns the new variable
    }
}



//constructor function
function Vehicle(Make, Model, Year, Color) { //create contstructor or template function with key value pairs
    this.Vehicle_Make = Make; //assign key value to make
    this.Vehicle_Model = Model; //assign key value
    this.Vehicle_Year = Year; //assign key value
    this.Vehicle_Color = Color; //assign key value
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //using new function create variable that will contain key and value inputs
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function my_Function() { //new function
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a "//outputs string plus information contained in the key value pair 
     + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
     " manufactured in " + Erik.Vehicle_Year;
}





//This is a ternary operator
function Voting_Age() { //This function uses a ternary operator to replace variable Can_vote with either a or b answer based on the age
    var Age, Can_vote; //create variables
    Age=document.getElementById("Age").value; //assign age variable to the value of user input
    Can_vote = (Age < 18) ? "You are to young to vote":"You can vote!"; //does a ternary operation
    document.getElementById("Vote").innerHTML = Can_vote; //outputs to result of the operation
}