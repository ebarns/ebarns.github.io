var img = new Image();
img.src = 'img/icon.png';
img.onload = function () {
    draw(this);
};

function draw(img) {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    img.style.display = 'none';
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;

    var sentence = "hey there big guys my name is erik and i am turning this string into some colorful stuff hey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuffhey there big guys my name is erik and i am turning this string into some colorful stuff"
    var invert = function () {
        var i =0;
        while(i< 20){
            setTimeout(colorChange, 500);
            i += 1;
        }

    };

    function colorChange(){
        console.log("changing");
        for (var i = 0; i < sentence.length * 100; i += 1) {
            var color = sentence.charCodeAt(i % sentence.length);
            var color1 = color % 17;
            var color2 = color * 3;
            var color3 = color / 11;
            data[i] = 255 - data[color1];     // red
            data[i + 1] = 255 - data[color2]; // green
            data[i + 2] = 255 - data[color3]; // blue
        }
        ctx.putImageData(imageData, 0, 0);
    }

    var grayscale = function () {
        for (var i = 0; i < data.length; i += 4) {
            var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i] = avg; // red
            data[i + 1] = avg; // green
            data[i + 2] = avg; // blue
        }
        ctx.putImageData(imageData, 0, 0);
    };

    var invertbtn = document.getElementById('invertbtn');
    invertbtn.addEventListener('click', invert);
}
