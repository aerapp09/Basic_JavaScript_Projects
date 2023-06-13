function countdown() { //function name
    var seconds = document.getElementById("seconds").value; //variable seconds assigned to id element with value

    function tick() { //function name
        seconds = seconds -1; //seconds variable redefined to minus 1
        TimeRanges.innerHTML = seconds; //uses timeranges function and definds seconds variable to it
        var time = setTimeout(tick, 1000); //creeates variable time and uses set time function, a tick variable to 1000 position
        if (seconds == -1) {    //creates if statement flow down if seconds and -1 are true
            alert("Time's up!"); //alert box comes up if the statement passes
            clearTimeout(time); //cleartimeout function the time variable
            TimeRanges.innerHTML= ""; //time rangees function set to empty string
        }
    }
    tick();//calls tick function