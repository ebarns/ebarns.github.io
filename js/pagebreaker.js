var interval;

function addExplode() {
    $('<span class="tap1"></span>').appendTo('.tap-box');
    $('<span class="tap2"></span>').appendTo('.tap-box');
    var count = 0;
    interval = window.setInterval(function () {
        exploding(count++);
    }, 300);
}

function exploding(count) {
    // if (count % 3 === 0) {
    //     $('<span class="explode1"><br/>EXPLODE</span>').appendTo('.explode');
    //     $('<i class="em em-point_up"></i>').appendTo('.might');
    // }
    // else {
    //     $('<span class="explode2"> EXPLODE</span>').appendTo('.explode');
    // }
    showWordPerLine('.tap-box .tap2', 'tap', 0, 200);
    showWordPerLine('.tap-box .tap2', 'tap', 0, 200);
    $('<img class="gentle-gif" src="img/gentle.gif"/>').appendTo('.gentle-box');
    $('<img class="gentle-gif" src="img/gentle.gif"/>').appendTo('.gentle-box');
    $('<img class="gentle-gif" src="img/gentle.gif"/>').appendTo('.gentle-box');

    if (count == 4) {
        var n = $(document).height();
        $('html, body').animate({scrollTop: n + 400}, 5000);
    }
    if (count === 10) explodingEnded();
}

function explodingEnded() {
    clearInterval(interval);
    showSection('.section2');
    tryingSection();

}

function scrollDown(time) {
    var n = $(document).height();
    $('html, body').animate({scrollTop: n}, time);
}

function scrollDownSection(section, time) {
    var n = $(document).height();
    $(section).animate({scrollTop: n}, time);
}


var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
        // $('<i class="em em-tired-face"></i>').appendTo(target);
    }
}

var showTextPerLine = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++] + "<br/>");
        setTimeout(function () {
            showTextPerLine(target, message, index, interval);
        }, interval);
        // Getting the height of the document
        var n = $(document).height();
        $('html, body').animate({scrollTop: n}, 45);
        // $('<i class="em em-tired-face"></i>').appendTo(target);
    }
}
var showWordPerLine = function (target, message, index, interval) {
    if (index < message.length) {
        index += 1;
        $(target).append(message);
        setTimeout(function () {
            showWordPerLine(target, message, index, interval);
        }, interval);
        // Getting the height of the document
        var n = $(document).height();

        $('<img class="img explode-gif" src="img/explode.gif"/>').appendTo('.tap2');
        // $('<i class="em em-tired-face"></i>').appendTo(target);
    }
}

$('.section2').on('mouseenter', function() {
    this.iid = setInterval(function() {
        // do something
        scrollDownSection('.trying', 1000);
    }, 25);
}).on('mouseleave', function(){
    this.iid && clearInterval(this.iid);
});

// $('.section2').hover(
//     function () {
//     });

function tryingSection() {
    trying();
    showSectionTime('.section3', 3000);
    $('<span class="col-md-4"> I hate crying but sometimes <br/> i just cant help it. Whats so wrong about crying? I would control it if i could. I would be cold if i could. but i cant. i cry. i cry. </span>').appendTo('.cry2');
};

function trying() {
    showText(".trying", "we watch each other online and judge. We used to not know what was happening in their heads but now we dont know what happens beyond their screen", 0, 200);
    showText(".trying", "we watch each other online and judge. We used to not know what was happening in their heads but now we dont know what happens beyond their screen", 0, 200);
};

function addImageToCanvas(imagePath, posX, posY) {
    // var canvas = document.getElementById('#canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.src = imagePath;
    context.drawImage(img, posX, posY);

}

function textRace() {
    showTextPerLine(".text-race", "LOSER | LOSER | LOSER", 0, 200);

}

function showSection(tag) {
    $(tag).fadeIn(2000);
}

function showSectionTime(tag, fadeTime) {
    $(tag).fadeIn(fadeTime);
}


function main() {
    $('.click-me').hide();
    $('.section2').hide();
    $('.section3').hide();
    $('.click-me').fadeIn(1000);
}


main();
