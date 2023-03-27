
let text2= "";
for (let i = 0; i < 10; i++) {
    if (i ===3) { continue; }
    text2 += "The number is " + i + "<br>";
}
document.getElementById("demo2").innerHTML = text2;

let text = "";
for (let i = 0; i< 10; i++) {
    if (i ===3) {break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;