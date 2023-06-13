
document.write(("This is the Math round operation: ")+ Math.round(4.6)) //This uses a Math operation

function sub(x,y) { //Create a function that performs a subtraction of x - y then prints the result with a string
return x-y;
}
document.getElementById("demo").innerHTML = "This is 4-3: " + sub(4,3);

function add(x,y) { //Create a function that performs an addition of x by y then prints the result with a string
return x+y;
}
document.getElementById("demo1").innerHTML = "This is 4+3: "+ add(4,3);


function mult(x, y){//Create a function that performs a multiplication of x by y then prints the result with a string
return x * y;
}
document.getElementById("demo2").innerHTML = "This is 4*3: "+ mult(4,3);


function modu(x, y){//Create a function that performs a modulus operation of x and y then prints the result with a string
return x%y;
}
document.getElementById("demo3").innerHTML = "This is the remainder of 4/3: "+ modu(4,3);


function plus(x){//Create a function that performs an addition of x  then prints the result with a string
return x++;
}
document.getElementById("demo4").innerHTML = "This is the number after 4: "+ plus(4);


function minu(x){//Create a function that performs a subtraction of x then prints the result with a string
return x--;
}
document.getElementById("demo5").innerHTML = "This is the number below 4: "+ minu(4);
