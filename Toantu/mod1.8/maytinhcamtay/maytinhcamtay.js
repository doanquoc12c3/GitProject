function addition(){
    var a = document.getElementById('number1').value
    var b = document.getElementById('number2').value
    var c = a + b
    document.getElementById('result').innerHTML = "Result: "+ c
}

function subtraction(){
    var a = document.getElementById('number1').value
    var b = document.getElementById('number2').value
    var c = a - b
    document.getElementById('result').innerHTML = "Result: "+ c
}

function division(){
    var a = document.getElementById('number1').value
    var b = document.getElementById('number2').value
    var c = a/b
    document.getElementById('result').innerHTML = "Result: "+ c
}

function multiplication(){
    var a = document.getElementById('number1').value
    var b = document.getElementById('number2').value
    var c = a*b
    document.getElementById('result').innerHTML = "Result: "+ c
}