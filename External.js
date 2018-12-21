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
    number1 = 15.25756;
    var number2 = number1.toFixed(3);

    document.getElementById("p_id").innerHTML = number2;
}