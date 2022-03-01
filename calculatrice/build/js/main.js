var nombre = 0;
var calcule = 0;
var number = 0;
var calculeadd = 0;
var plu = 0;
var moin = 0;
var multip = 0;
var divi = 0;

function one() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('one'); afficher la ligne html
    console.log("Vous avez entré 1");
    nombre =   number+"1";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function two() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 2");
    nombre =   number+"2";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function three() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 3");
    nombre =   number+"3";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function four() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 4");
    nombre =   number+"4";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function five() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 5");
    nombre =   number+"5";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function six() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 6");
    nombre =   number+"6";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function seven() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 7");
    nombre =   number+"7";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function eight() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 8");
    nombre =   number+"8";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function nine() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 9");
    nombre =   number+"9";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function zero() {
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "Additions";
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 0");
    nombre =   number+"0";
    console.log("adition", nombre);
    nombre = nombre;
    number = parseInt(nombre);
    console.log("adition", number);
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = number ;
}
function equal(){
    if (plu != 0 ){
        plu = 0;
        calculeop = calcule+"+"+number+"=";
        calcule = calcule + number ;
    }
    if (moin != 0){
        moin = 0;
        calculeop = calcule+"-"+number+"=";
        calcule = calcule - number ;
    }
    if (multip != 0){
        multip = 0;
        calculeop = calcule+"*"+number+"=";
        calcule = calcule * number ;
    }
    if (divi != 0){
        divi = 0;
        calculeop = calcule+"/"+number+"=";
        calcule = calcule / number ;

    }
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = calculeop+calcule;
    var affichage = document.getElementById('print_number');
    affichage.innerHTML = calcule ;
    console.log("nombre", number);
    console.log("calcule", calcule);
    calculeadd = calcule;
}
function plus(){
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "+";
    if (calculeadd != 0){
        calcule = calculeadd ;
        calculeadd = 0;
        plu = 1;
        console.log("number", number);
        console.log("nombre", nombre);
        number = 0;
        console.log("calcule", calcule);
        // var affichage = document.getElementById('print_number');
        // affichage.innerHTML = calculeadd ;
    }else{
        calcule = number;
        number = 0;
        plu = 1;
        console.log("calcule", calcule);
        console.log("number", number);
        console.log("else", "0");
        // var affichage = document.getElementById('print_number');
        // affichage.innerHTML = number ;
    }
}

function reset(){
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = "Calcule";
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "Calculatrice";
    nombre =  0;
    number =  0;
    calcule = 0;
    calculeadd = 0;
    console.log("nombre", nombre);
    console.log("calcule", calcule);
    document.getElementById('zero').disabled = false;
}

function moins(){
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "-";
    if (calculeadd != 0){
        calcule = calculeadd ;
        calculeadd = 0;
        moin = 1;
        console.log("number", number);
        console.log("nombre", nombre);
        number = 0;
        console.log("calcule", calcule);
        // var affichage = document.getElementById('print_number');
        // affichage.innerHTML = calculeadd ;
    }else{
        calcule = number;
        number = 0;
        moin = 1;
        console.log("calcule", calcule);
        console.log("number", number);
        console.log("else", "0");
        // var affichage = document.getElementById('print_number');
        // affichage.innerHTML = number ;
    }
}
function multi(){
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "*";
    if (calculeadd != 0){
        calcule = calculeadd ;
        calculeadd = 0;
        console.log("number", number);
        console.log("nombre", nombre);
        number = 0;
        multip = 1;
        console.log("calcule", calcule);
        // var affichage = document.getElementById('print_number');
        // affichage.innerHTML = calculeadd ;
    }else{
        calcule = number;
        number = 0;
        multip = 1;
        console.log("calcule", calcule);
        console.log("number", number);
        console.log("else", "0");
        // var affichage = document.getElementById('print_number');
        // affichage.innerHTML = number ;
    }
}
function div(){
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = "/";
    if (calculeadd != 0){
        calcule = calculeadd ;
        calculeadd = 0;
        divi = 1;
        console.log("number", number);
        console.log("nombre", nombre);
        number = 0;
        console.log("calcule", calcule);
        // var affichage = document.getElementById('print_number');
        // affichage.innerHTML = calculeadd ;
    }else{
        calcule = number;
        number = 0;
        divi = 1;
        console.log("calcule", calcule);
        console.log("number", number);
        console.log("else", "0");
        // var affichage = document.getElementById('print_number');
        // affichage.innerHTML = number ;
    }
}