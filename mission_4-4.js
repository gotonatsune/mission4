function lottery() {
    var array = ["大吉", "中吉", "小吉"];
    var number1 = Math.random();
    var number2 = number1 * 3;
    var number = Math.floor(number2);
    var lot = array[number];
    var object = document.getElementById("result");
    object.innerText = lot;
}