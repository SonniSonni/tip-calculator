let bill = 0;
let tip = 0;
let total = document.getElementById("total");

document.getElementById("calc-button").onclick = function(){
    bill = document.getElementById("bill").value;
    tip = document.getElementById("tip-percent").value;
};

