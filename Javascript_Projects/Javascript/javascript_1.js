function Color_Function() {
    var Color_Output; //empty variable
    var Colors = document.getElementById("Color_Input").value; //variable that takes value from input
    var Color_String = " is a great color!"; //string to variable
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String; //creates like containers for the answer similar to if statement
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Orange":
            Color_Output = "Orange" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}