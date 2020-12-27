window.addEventListener("load", start);
// quando a página carregar execute a função start

function start(){
    

}

// Essas variáveis precisam ser globais para que eu possa usar em outra função
var text1_1, text2_1;

// Função invocada quando o botão "Definir traços" é clicado
// btn_setTraces
function getValueSelected(){
    
    console.log("Traços definidos!");

    // Parente 1
    var parent1_1 = document.querySelector("#p1t1");
    var value1_1 = parent1_1.selectedIndex;
    text1_1 = parent1_1.options[value1_1].innerText;
    console.log("Parente 1: " + text1_1);
    
    // Parente 2    
    var parent2_1 = document.querySelector("#p2t1");
    var value2_1 = parent2_1.selectedIndex;
    text2_1 = parent2_1.options[value2_1].innerText;
    console.log("Parente 2: " + text2_1);
}

// Função invocada quando o botão "Gerar" é clicado
// btn_generate

var ArrayResult = [];
var teste1, teste2;
var array1_1,array2_1;

function setValues(){
     array1_1 = text1_1.split("");
     array2_1 = text2_1.split("");

    teste1 = array1_1[0] + array2_1[0];
    teste2 = array1_1[1] + array2_1[1];
    //console.log(array2_1);

    for(var i = 0; i <= text1_1.lenght; i++){
        ArrayResult[i] = [array1_1[0] + array2_1[0]];
    }
    console.log("Array:" + ArrayResult);

}



var buttonTrace = document.querySelector("#btn_trace");
var buttonGenerate = document.querySelector("#btn_generate");