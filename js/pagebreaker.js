var interval;

function addExplode() {
    var count = 0;
    $('<img src="img/gentle.gif"/>').appendTo('.click-me');
    interval = window.setInterval(function () {
        exploding(count++);
    }, 500);
    $('<img class="img explode-gif" src="img/explode.gif"/>').appendTo('.explode');
    showSection('.section2');
    trying();
}

function exploding(count) {
    if (count % 3 === 0) {
        $('<span class="explode1"><br/>EXPLODE</span>').appendTo('.explode');
        $('<i class="em em-point_up"></i>').appendTo('.might');
    }
    else {
        $('<span class="explode2"> EXPLODE</span>').appendTo('.explode');
    }
    if (count % 2 === 0) {
        $('<span class="tap1"><br/></span>').appendTo('.tap');
        showText('.tap1', 'tap ', 0, 300);
    } else {
        $('<span class="tap2"></span>').appendTo('.tap');
        showText('.tap2', 'tap ', 0, 300);
    }

    if (count === 10) clearInterval(interval);
}

var showText = function (target, message, index, interval) {
    if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
        // $('<i class="em em-tired-face"></i>').appendTo(target);
    }
}


$(".trying").hover(
function(){
    $('<span class="col-md-4"> I hate crying but sometimes <br/> i just cant help it. Whats so wrong about crying? I would control it if i could. I would be cold if i could. but i cant. i cry. i cry. </span>').appendTo('.cry2');
});

function trying(){
    showText(".trying", "we watch each other online and judge. We used to not know what was happening in their heads but now we dont know what happens beyond their screen", 0, 300);
    showText(".trying", "we watch each other online and judge. We used to not know what was happening in their heads but now we dont know what happens beyond their screen", 0, 300);
};

function addImageToCanvas(imagePath, posX, posY){
    // var canvas = document.getElementById('#canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.src = imagePath;
    context.drawImage(img, posX,posY);

}

function showSection(tag){
    $(tag).fadeIn(2000);
}
function main(){
    $('.click-me').hide();
    $('.section2').hide();
    $('.click-me').fadeIn(1000);
}


main();
