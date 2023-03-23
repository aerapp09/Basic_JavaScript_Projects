function my_Function() {
    document.write(typeof 5) + "<br>";
    ;
}

function my_Function2() {
    document.getElementById("test2").innerHTML = "Hello" + 5;
}

function my_Function3() {
    document.getElementById("test3").innerHTML = (5==5) + "<br>" + (5==='5') + "<br>" + 
    (6<9) + "<br>" + (6 >9) + "<br>" + (6<8 && 8>9) + "<br>" + (9>10 || 11<22) + "<br>" + (1 != 4);
}