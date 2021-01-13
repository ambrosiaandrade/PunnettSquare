/* 
Author: Ambrósia Andrade
Year: 2021
GitHub: https://github.com/dev-ambro
*/

// Global variables

var text1_1, text2_1;
var ArrayResult = [];
var array1_1,array2_1;
var showMessage = document.querySelector("#message");
showMessage.style.visibility = "hidden";

// This funcion is active when the button "Gerar" is pressed

function getValueSelected(){
    
    // Parent 1
    var parent1_1 = document.querySelector("#p1t1");
    var value1_1 = parent1_1.selectedIndex;
    text1_1 = parent1_1.options[value1_1].innerText;
    
    // Parent 2    
    var parent2_1 = document.querySelector("#p2t1");
    var value2_1 = parent2_1.selectedIndex;
    text2_1 = parent2_1.options[value2_1].innerText;

    ArrayResult = [];

    showMessage.style.visibility = "visible";

    setValues();
}

// This function feeds the array that will be printed on the table

function setValues(){
    
    array1_1 = text1_1.split("");
    array2_1 = text2_1.split("");

    // The array with the results is created in a static way

    ArrayResult.push(array1_1[0] + array2_1[0]);
    ArrayResult.push(array1_1[0] + array2_1[1]);
    ArrayResult.push(array1_1[1] + array2_1[0]);
    ArrayResult.push(array1_1[1] + array2_1[1]);

    printTable();
}

// This function writes on the webpage the results of the punnett square

function printTable(){
    var table = document.querySelector("#resultTable");
    table.innerHTML = 
    `<table>
    <tr>
        <td>${ArrayResult[0]}</td>
        <td>${ArrayResult[1]}</td>
    </tr>    
    <tr>
        <td>${ArrayResult[2]}</td>
        <td>${ArrayResult[3]}</td>
    </tr>    
    </table>`;

    calculateTraces();
}

// This function calculates the percentage of the traces and write it on the webpage

function calculateTraces(){
    var count_AA = 0, count_Aa = 0, count_aa = 0;
    for (var i = 0; i < 4; i++){
        if (ArrayResult[i] == "AA") {
            count_AA++;
        } 
        if ((ArrayResult[i] == "Aa") || (ArrayResult[i] == "aA")) {
            count_Aa++;
        }; 
        if (ArrayResult[i] == "aa") {
            count_aa++;
        }; 
    }
    
    var calculus = document.querySelector("#resultCalc");
    calculus.textContent = 
    "AA: " + (count_AA/4)*100 + "% "
    + "\nAa: " + (count_Aa/4)*100 + "% "
    + "\naa: " + (count_aa/4)*100 + "%";
    
    /*
    console.log("Porcentagem!\nAA: " + (count_AA/4)*100 + "%"
    + "\nAa: " + (count_Aa/4)*100 + "%"
    + "\naa: " + (count_aa/4)*100 + "%");
    */
}