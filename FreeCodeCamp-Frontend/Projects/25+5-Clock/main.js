let breakLength = 5;
let sessionLength = 25;

let start = false;
let breakStart = false;


let minutes = sessionLength;
let seconds = 0;


var myInterval;


$("document").ready(function () {
    $("#session-length").text(sessionLength);
    $("#break-length").text(breakLength);
    $("#time-left").text(`${minutes <= 0 ? "0" + minutes : minutes}:${seconds <= 0 ? "0" + seconds : seconds}`);
})



$("#start_stop").click(function () {
    start = start ? false : true;
    if (start) {
        $("#bell").trigger("pause");
        $("#bell")[0].currentTime = 0;
        $(this).children().removeClass('fa-play');
        $(this).children().addClass('fa-pause');
        myInterval = setInterval(() => {
            seconds--;
            if (seconds <= 0 && minutes > 0) {
                seconds = 59;
                minutes -= 1;
            }
            if (seconds < 0 && minutes === 0 && !breakStart) {
                console.log("times up");
                minutes = breakLength;
                breakStart = true;
                $("#timer-label").text("Break");
                $("#bell").trigger("play");
                seconds = 0;
            }
            if (seconds < 0 && minutes === 0 && breakStart) {
                breakStart = false;
                $("#timer-label").text("Session");
                $("#bell").trigger("play");
                minutes = sessionLength;
                seconds = 0;
            }
            $('#time-left').text(`${minutes < 10 ? "0" + minutes : minutes}: ${seconds < 10 ? "0" + seconds : seconds} `)
        }, 1000)
    }
    else {
        clearInterval(myInterval);
        $(this).children().removeClass('fa-pause');
        $(this).children().addClass('fa-play');
    }
})


$("#reset").click(function () {
    start = false;
    clearInterval(myInterval);
    breakLength = 5;
    sessionLength = 25;
    minutes = sessionLength;
    seconds = 0;
    $("#session-length").text(sessionLength);
    $("#break-length").text(breakLength);
    $("#start_stop").children().removeClass('fa-pause');
    $("#start_stop").children().addClass('fa-play');
    $('#time-left').text(`${minutes < 10 ? "0" + minutes : minutes}: ${seconds < 10 ? "0" + seconds : seconds} `)
})



$("#break-decrement").click(function () {
    if (start) return;
    breakLength = breakLength - 1 > 0 ? breakLength - 1 : 1;
    $("#break-length").text(breakLength);
})

$("#break-increment").click(function () {
    if (start) return;
    breakLength = breakLength + 1 >= 60 ? 59 : breakLength + 1;
    $("#break-length").text(breakLength);
})

$("#session-decrement").click(function () {
    if (start) return;
    sessionLength = sessionLength - 1 > 0 ? sessionLength - 1 : 1;
    minutes = sessionLength;
    $("#session-length").text(sessionLength);
    $('#time-left').text(`${minutes < 10 ? "0" + minutes : minutes}: ${seconds < 10 ? "0" + seconds : seconds} `)
})



$("#session-increment").click(function () {
    if (start) return;
    sessionLength = sessionLength + 1 >= 60 ? 59 : sessionLength + 1;
    minutes = sessionLength;
    $("#session-length").text(sessionLength);
    $('#time-left').text(`${minutes < 10 ? "0" + minutes : minutes}: ${seconds < 10 ? "0" + seconds : seconds} `)
})