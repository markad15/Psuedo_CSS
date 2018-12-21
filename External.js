function postinformation()
{
    document.getElementById("first_span").innerHTML = "This is my first javascript Program added in external js file."
}


function getdetails_innertext()
{
    alert(document.getElementById("first_span").innerText);
}

function getdetails_innerhtml()
{
    alert(document.getElementById("first_span").innerHTML);
}

function fun_fixed()
{
    var number1;
    number1 = 15.25796;
    var number2 = number1.toFixed(3);

    document.getElementById("p_id").innerHTML = number2;
}

function fun_precision()
{
    var num1 = 20.4256;
    var num2 = num1.toPrecision(2);
    document.getElementById("p_id").innerHTML = num2;
}

function fun_charAt()
{
    var string1 = "I am from Angular Avengers";
    var string2 = string1.charAt(18);
    document.getElementById("p_id").innerHTML = string2;
}

function fun_charascii()
{
    var string1 = "I am from Angular Avengers";
    var string2 = string1.charCodeAt(10);
    document.getElementById("p_id").innerHTML = string2;
}