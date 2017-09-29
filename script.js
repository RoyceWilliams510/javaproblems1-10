/**
 * Created by h205p2 on 9/25/17.
 */
//function sleepIn(x,y) {
    return x;
}

//write second method
function nextOne(param1, param2) {

}

function tester() {

  //  document.getElementById("output").innerHTML = sleep_in(true, false);
  // document.getElementById("output").innerHTML = sleepIn(true, true);
  //  document.getElementById("output").innerHTML = sleepIn(false, true);
  //   document.getElementById("output").innerHTML = sleepIn(false, false);
  //   test third method, etc
    document.getElementById("output").innerHTML = strin_times(bro, 4);
}
function sleep_in(weekday,vacation){
    if(weekday==true && vacation==true){
        return true
    }
    if(weekday== false&& vacation== false){
        return true
    }
    if(weekday== false&& vacation == true) {
        return true
    }
    if(weekday==true && vacation==false) {
        return false
    }
}
function monkey_trouble(a_smile, b_smile){
    if(a_smile==true&& b_smile==false){
        return false
    }
    if(a_smile==false && b_smile==false) {
        return true
    }
    if(a_smile==false&& b_smile== true){
        return false
    }
    if(a_smile==true && b_smile== true){
        return true
    }
}

function string_times(word, number){
    var sum ="";
    for(var i=0; i<number; i++) {
        sum=sum+word;
    }
    return sum;
}
function front_times(string,n){
    var str = string.substring(0,3)
    var sum = "";
    for(var i = 0; i<n; i++){
        sum+=str;
    }
    return sum;
}
function string_bits(string,number){
    var i = 0;
    var str ="";
    while(string.length>i){
        str+=string[i];
        i+=2;
    }
    return str;
}
function caughtSpeeding(speed, bday) {
    if (bday == true) {
        speed = speed - 5;
    }
    if (speed <= 60) {
        return 0
    }
    if (speed > 60 && speed <= 80) {
    return 1;
    }
    if (speed> 80){
        return 2;
    }
}
function fizz_buzz(i){
    if(i%5==0 && i%3==0){
        return "FizzBuzz";
    }
    if(i%5==0){
        return "buzz";
    }
    if(i%3==0){
        return "fizz";
    }
    return i+"!";
}
function teaParty(t,c){
    if(c<5||t<5){
        return "0";
    }
    if(t>=(2*c)){
        return "2";
    }
    if(c>=(2*t)) {
        return "2";
    }
    if(t>=5&&c>=5) {
        return "1";
    }
}
function loneSum(a,b,c){
    if(a==b&& b==c){
        return 0;
    }

    if(a==c){
        return b;
    }
    if(a==b){
        return c;
    }
    if(c==b){
        return a;
    }
    if(a!=b != c){
        return a+b+c;
    }
}
