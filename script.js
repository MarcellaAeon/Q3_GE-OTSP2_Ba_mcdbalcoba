var a = prompt("First Length:" );
var b = prompt("Second Length:" );
var c = prompt("Third Length:" );

var an = isNaN(a);
var bn = isNaN(b);
var cn = isNaN(c);

if(an == false){
    alert("The first length (Value: " + a +") is a number");
}
else{
    alert("The first length (Value: " + a +") is not a number");
}
if(bn == false){
    alert("The first length (Value: " + b +") is a number");
}
else{
    alert("The first length (Value: " + b +") is not a number");
}
if(cn == false){
    alert("The first length (Value: " + c +") is a number");
}
else{
    alert("The first length (Value: " + c +") is not a number");
    }
function determineTriangle(){
    if (an == false || bn == false || cn == false){
        window.alert("ERROR");
    }
    else if(a==b && b==c){   
        window.alert("The triangle is EQUILATERAL");
    }
    else if (a==b && b!=c){
        window.alert("The triangle is ISOSCELES");
    }
    else if (b==c && c!=a){
        window.alert("The triangle is ISOSCELES");
    }
    else if (c==a && a!=b){
        window.alert("The triangle is ISOSCELES");
    }
    else{
        window.alert("The triangle is SCALENE");
    }
}
