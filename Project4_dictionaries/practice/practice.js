function myDictionary() { //defines a function named myDictionary
var Animal = { //Specifies a dictionary with class name= Animal. 
    Species: "Dog",
    Color: "Black",
    Breed: "Labrador",
    Age: 5,
    Sound: "Bark"
};
document.getElementById("Dictionary").innerHTML = Animal.Sound; //Call the element wih Dictionary and replaces with variable Animal.Sound
    }