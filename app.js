var check = 0;

function getInput(i){
    var x=i;
    if(x === "="){
        document.getElementById('input').value=eval( document.getElementById('input').value)
    }else if(x === "+" || x === "-" ||x === "*" ||x === "/" ){
        if(check === 0)
        document.getElementById('input').value+=i;
        check = 1;

    }
    else if (x === "C"){
        document.getElementById('input').value = ''; 
    }
    else{
        document.getElementById('input').value+=i;
        check = 0;
    }
}