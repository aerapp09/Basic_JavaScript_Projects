function full_sentence() { //define function
    var part_1 = "I have "; //create variables of strings
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);//use the concatmethod to combine variable
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}