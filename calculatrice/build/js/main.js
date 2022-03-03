var nombre = 0;
let total1 = 0;
var enregistement = 0;
var calcul = 0;
var addition = 0;
var moin = 0;
var multip = 0;
var divi = 0;
var calculadd = 0;
var enregistement2 = 0;

function one(){
    nombre = nombre + "1"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function two(){
    nombre = nombre + "2"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function three(){
    nombre = nombre + "3"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function four(){
    nombre = nombre + "4"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function five(){
    nombre = nombre + "5"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function six(){
    nombre = nombre + "6"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function seven(){
    nombre = nombre + "7"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function eight(){
    nombre = nombre + "8"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function nine(){
    nombre = nombre + "9"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function zero(){
    nombre = nombre + "0"; // Chaine de caractère string
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function virgule(){
    nombre = nombre + "." ; // Chaine de caractère Stings
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = nombre;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = nombre;
}
function plus(){
    enregistement = parseFloat(nombre);
    nombre = 0;
    addition = 1;
    document.getElementById('plus').disabled = true;
    document.getElementById('moins').disabled = true;
    document.getElementById('multi').disabled = true;
    document.getElementById('div').disabled = true; 
    var affichageaddition2 = document.getElementById('print_number');
    affichageaddition2.innerHTML = '+';
    var affichageaddition = document.getElementById('print_numbersl');
    affichageaddition.innerHTML = '+';
}
function moins(){
    enregistement = parseFloat(nombre);
    nombre = 0;
    moins = 1;
    document.getElementById('plus').disabled = true;
    document.getElementById('moins').disabled = true;
    document.getElementById('multi').disabled = true;
    document.getElementById('div').disabled = true;
    var affichageaddition2 = document.getElementById('print_number');
    affichageaddition2.innerHTML = '-';
    var affichageaddition = document.getElementById('print_numbersl');
    affichageaddition.innerHTML = '-';
    

}
function multi(){
    enregistement = parseFloat(nombre);
    nombre = 0;
    multip = 1;
    document.getElementById('plus').disabled = true;
    document.getElementById('moins').disabled = true;
    document.getElementById('multi').disabled = true;
    document.getElementById('div').disabled = true;
    var affichageaddition2 = document.getElementById('print_number');
    affichageaddition2.innerHTML = '*';
    var affichageaddition = document.getElementById('print_numbersl');
    affichageaddition.innerHTML = '*';

}
function div(){
    enregistement = parseFloat(nombre);
    nombre = 0;
    divi = 1;
    document.getElementById('plus').disabled = true;
    document.getElementById('moins').disabled = true;
    document.getElementById('multi').disabled = true;
    document.getElementById('div').disabled = true;
    var affichageaddition2 = document.getElementById('print_number');
    affichageaddition2.innerHTML = '/';
    var affichageaddition = document.getElementById('print_numbersl');
    affichageaddition.innerHTML = '/';
}

function equal(){
    if (calculadd == 1){
        if (addition == 1){
            nombre = parseFloat(nombre);
            total1 = enregistement2 + nombre ;
            addition = 0;
        }
        if (moin == 1){
            nombre = parseFloat(nombre);
            total1 = enregistement2 - nombre ;
            moin = 0;
        }
        if (multip == 1){
            nombre = parseFloat(nombre);
            total1 = enregistement2 * nombre ;
            multip = 0;
        }
        if (divi == 1){
            nombre = parseFloat(nombre);
            total1 = enregistement2 / nombre ;
            divi = 0;
        }
        var affichageaddition = document.getElementById('affichage');
        affichageaddition.innerHTML = total1;
        var affichageaddition2 = document.getElementById('affichagesl');
        affichageaddition2.innerHTML = total1;
        enregistement2 = total1
        total1 = 0;
        nombre = "0";
        calculadd = 1;
        document.getElementById('plus').disabled = false;
        document.getElementById('moins').disabled = false;
        document.getElementById('multi').disabled = false;
        document.getElementById('div').disabled = false;
    }else{
        console.log(nombre);
    if (addition == 1){
        nombre = parseFloat(nombre);
        total1 = enregistement + nombre ;
        addition = 0;
    }
    if (moins == 1){
        nombre = parseFloat(nombre);
        total1 = enregistement - nombre ;
        moins = 0;
    }
    if (multip == 1){
        nombre = parseFloat(nombre);
        total1 = enregistement * nombre ;
        multip = 0;
    }
    if (divi == 1){
        nombre = parseFloat(nombre);
        total1 = enregistement / nombre ;
        divi = 0;
    }
    var affichageaddition = document.getElementById('affichage');
    affichageaddition.innerHTML = total1;
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = total1;
    enregistement2 = total1
    total1 = 0;
    nombre = "0";
    calculadd = 1;
    document.getElementById('plus').disabled = false;
    document.getElementById('moins').disabled = false;
    document.getElementById('multi').disabled = false;
    document.getElementById('div').disabled = false;
    var affichageaddition2 = document.getElementById('print_number');
    affichageaddition2.innerHTML = 'Calculatrice';
    var affichageaddition = document.getElementById('print_numbersl');
    affichageaddition.innerHTML = 'Calcule';
    }
    
}

function reset(){
    nombre = 0;
    total1 = 0;
    enregistement = 0;
    calcul = 0;
    addition = 0;
    moins = 0;
    multip = 0;
    divi = 0;
    calculadd = 0;
    enregistement2 = 0;
    var affichageaddition2 = document.getElementById('print_number');
    affichageaddition2.innerHTML = 'Calculatrice';
    var affichageaddition = document.getElementById('print_numbersl');
    affichageaddition.innerHTML = 'Calcule';
    var affichageaddition2 = document.getElementById('affichage');
    affichageaddition2.innerHTML = 'Calcule';
    var affichageaddition2 = document.getElementById('affichagesl');
    affichageaddition2.innerHTML = 'Calculatrice';
    document.getElementById('plus').disabled = false;
    document.getElementById('moins').disabled = false;
    document.getElementById('multi').disabled = false;
    document.getElementById('div').disabled = false;
}

