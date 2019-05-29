var slid = setInterval(select, 3000);
var num = 0;
var sl = ["slide1","slide2","slide3","slide4"];
var chaine = "Julien Bardin";
var chaine1 = "Apprenti Développeur FullStack chez Simplon.co"; 
var nb_car = chaine.length; 
var nb_car1 = chaine1.length; 
var tableau = chaine.split("");
var tableau1 = chaine1.split("");
texte = new Array;
texte1 = new Array;
var txt = '';
var txt1 = '';
var nb_msg = nb_car - 1;
var nb_msg1 = nb_car1 - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
  txt = texte[i];
}
for (i=0; i<nb_car1; i++) {
    texte1[i] = txt1+tableau1[i];
     txt1 = texte1[i];
}
actual_texte = 0;
actual_texte1 = 0;

function select(){
    var imag = sl[num];
    var res = document.getElementById(imag);
    slide(res);
}
function slide(change){
    var imprev = 0;
    if(num == 0) {
        imprev = 3;
    } else {
        imprev = num - 1;
    }
    var prev = document.getElementById(sl[imprev]);
    prev.style.zIndex = "0";
    prev.style.opacity = "0";
    change.style.opacity = "1";
    change.style.zIndex = "5";

    if(num == 3){
        num = 0;
    } else {
        num++;
    }
}


function changeMessage()
{
document.getElementsByTagName("h1")[0].innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
}
if(document.getElementsByTagName) {
setInterval("changeMessage()",100); /* la vitesse de defilement (plus on a une valeur faible plus 
texte s'affiche rapidement) */
setInterval("changeMessage1()",30);}

function changeMessage1()
{
document.getElementsByTagName("p")[0].innerHTML = texte1[actual_texte1];
actual_texte1++;
if(actual_texte1 >= texte1.length)
actual_texte1 = nb_msg1;
}