var nombre = 0;
var calcule = 0;

function one() {
    // var elem = document.getElementById('one'); afficher la ligne html
    console.log("Vous avez entré 1");
    nombre =  nombre + " + 1";
    calcule = calcule  + 1;
    console.log("calcul", calcule);
    console.log("adition", nombre);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "1";

}
function two() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 2");
    nombre =  nombre + " + 2";
    calcule = calcule  + 2;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "2";
}
function three() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 3");
    nombre =  nombre + " + 3";
    calcule = calcule  + 3;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "3";
}
function four() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 4");
    nombre =  nombre + " + 4";
    calcule = calcule  + 4;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "4";
}
function five() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 5");
    nombre =  nombre + " + 5";
    calcule = calcule  + 5;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "5";
}
function six() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 6");
    nombre =  nombre + " + 6";
    calcule = calcule  + 6;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "6";
}
function seven() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 7");
    nombre =  nombre + " + 7";
    calcule = calcule  + 7;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "7";
}
function eight() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 8");
    nombre =  nombre + " + 8";
    calcule = calcule  + 8;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "8";
}
function nine() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 9");
    nombre =  nombre + " + 9";
    calcule = calcule  + 9;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "9";
}
function zero() {
    // var elem = document.getElementById('two'); afficher la ligne html
    console.log("Vous avez entré 9");
    nombre =  nombre + " *10 ";
    calcule = calcule  * 10;
    console.log("adition", nombre);
    console.log("resultat", calcule);
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = nombre ;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "*10";
    document.getElementById('zero').disabled = true;
}
function equal(){
    var affichage = document.getElementById('affichage');
    console.log("adition", nombre);
    console.log("resultat", calcule);
    affichage.innerHTML = nombre + " = " + calcule;
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = calcule;
}

function reset(){
    var affichage = document.getElementById('affichage');
    affichage.innerHTML = "Calcule";
    var affichageaddition = document.getElementById('print_number');
    affichageaddition.innerHTML = "Addition";
    nombre =  0;
    calcule = 0;
    console.log("nombre", nombre);
    console.log("calcule", calcule);
    document.getElementById('zero').disabled = false;
}
