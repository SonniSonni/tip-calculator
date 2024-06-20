let bill = 0;
let tip = 0;
let total = 0; 

document.getElementById("calc-button").onclick = function(){
    bill = document.getElementById("bill").value;
    tip = +(document.getElementById("tip-percent").value / 100);

    total = ( +bill + ( +bill * +tip ) )
    
    document.getElementById("total").innerHTML = total;
};

