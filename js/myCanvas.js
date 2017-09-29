var context = canvas.getContext('2d');
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
context.shadowColor = 'red';
context.shadowBlur = 10;
context.globalAlpha = 0.7;

//canvas stuff
window.onscroll = function () {
    colorCanvas();
};


var alternating = false;
$("#canvas").mousemove(function (arg) {
    if (alternating) {
        context.fillStyle = "#abf4f4";
        var pos = getMousePos(canvas, arg);
        context.beginPath();
        context.arc(pos.x, pos.y, 100, 30, 10);
        context.fill();
    } else {
        context.fillStyle = "#fff";
        var pos = getMousePos(canvas, arg);
        context.beginPath();
        context.arc(pos.x + 20, pos.y + 20 , 120, 30, 20);
        context.fill();
    }
    context.fillStyle = "#ff758e";
    context.fillRect(pos.x + 10, pos.y + 15, 100, 100);
    context.clearRect(pos.x, pos.y, 60, 60);
    context.strokeRect(pos.x, pos.y, 50, 50);
    context.fill();

    alternating = !alternating;
});

var canvas2 = document.getElementById('canvas2');
var context2 = canvas2.getContext('2d');
context2.canvas.width = window.innerWidth;
context2.canvas.height = window.innerHeight;
context2.shadowColor = 'red';
context2.shadowBlur = 10;
context2.globalAlpha = 0.7;
$("#canvas2").mousemove(function (arg) {
    context.fillStyle = "#fff";
    var pos = getMousePos(canvas2, arg);
    context.beginPath();
    context.arc(pos.x, pos.y, 40, 10, 10 * Math.PI);
    context.fill();
});

function getMousePos(canvas, e) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function colorCanvas() {
    // console.log("coloring");
    // var canvasData = context.getImageData(0, 0, context.canvas.width, context.canvas.height);
    // var data = canvasData.data;
    // for (var i = 0; i < data.length; i += 4) {
    //     // red
    //     if(i % 2 === 0 )data[i] = Math.floor(Math.random() * 256);
    //     else data[i] = 256;
    //     // green
    //     data[i + 1] = Math.floor(Math.random() * 200);
    //     // blue
    //     data[i + 2] = Math.floor(Math.random() * 256);
    // }
    // context.putImageData(canvasData, 0, 0);
}

//
// (function() {
//     var canvas = document.getElementById('canvas'),
//         context = canvas.getContext('2d');
//
//     // resize the canvas to fill browser window dynamically
//     window.addEventListener('resize', resizeCanvas, false);
//
//     function resizeCanvas() {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//
//         /**
//          * Your drawings need to be inside this function otherwise they will be reset when
//          * you resize the browser window and the canvas goes will be cleared.
//          */
//         drawStuff();
//     }
//     resizeCanvas();
//
//     function drawStuff() {
//         // do your drawing stuff here
//     }
// })();
