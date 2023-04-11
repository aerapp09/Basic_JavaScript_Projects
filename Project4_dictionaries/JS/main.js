function myDictionary() { //defines a function named myDictionary
    var Animal = { //Specifies a dictionary with class name= Animal. 
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark",
        Sound: "Bork"
    };
    delete Animal.Sound; //Delete the Key/value pair 

    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Call the element wih Dictionary and replaces with variable Animal.Sound
        }