var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //creates list in variable
var Content= ""; //empty string
var Y; //undefined variable
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) { //Y is 0, 0 is less than instrument length. 1+0 = Y
        Content += Instruments[Y] + "<br>"; //content = instrument[0] + content. First one is Guitar
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}