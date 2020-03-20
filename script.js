//Question Number 2
window.onload = function(){
    var visits = localStorage.getItem("onLoad");
    if (visits === null) {
        visits = 0;
    }
    visits++;
    localStorage.setItem("onLoad", visits);
    document.getElementById("visitCount").innerHTML = "You have visited this site " + visits + " times"
}

//Question Number 1
function age() {

    var age = prompt("Write your age:");
    alert("your age is: "+age);
}



//Question Number 3
function birtYear() {
    var birthyear = parseInt(prompt("Write Your Birth Year:"));
    document.getElementById("birthyear").innerHTML = "Your Birth Year is: " + birthyear;
    document.getElementById("dataType").innerHTML = "Data Type of my Declared Variable is: "+ typeof birthyear;
}


//Question Number 5
function displayTable(){
    var number = parseInt(prompt("Write any Number to print Table"));
    for (var i =1; i<=10; i++) {
        var multiple = number*i
        console.log(number+" X "+i+" = "+multiple);

        var ptag = document.createElement("p");
        document.getElementById("fourtable").appendChild(ptag).innerHTML = `<p>${number} X ${i} = ${multiple} </p>`;
    }
}
//Question Number 5

function temperatureConvertor(){
    var celsius = parseInt(prompt("What's Celsius temperature Right Now?"));

    var farrenhite = celsius*9/5 +32;
    var ctag = document.createElement("h4");
    document.getElementById("farrenhite").appendChild(ctag).innerHTML = `<h3>${celsius}°C in Farrenhite is <b style="color:green;">${farrenhite}°F</b> </h3>`
    console.log(farrenhite);
}
//Question Number 6

function toCelcius() {
    var farrenhite = parseInt(prompt("What's the Farrenhite temperature in celcius right Now?"));

    var celsius = (farrenhite - 32)*5/9;
    var ftag = document.createElement("h4");
    document.getElementById("celcius").appendChild(ftag).innerHTML = `<h3>${farrenhite}°F in Celcius is <b style="color:green;">${celsius}°F</b> </h3>`
    console.log(celsius);
}

//Question Number 7
function checkout() {
    var item1 = parseInt(prompt("What is the price of item 1:"));
    var oQunatity1 = parseInt(prompt("What is the Ordered quantity of item 1:"));
    var totalItem1 = item1*oQunatity1;
    console.log(totalItem1);
    document.getElementById("item1").innerHTML = item1;
    document.getElementById("qunatity1").innerHTML = oQunatity1;


    var item2 = parseInt(prompt("What is the price of item 2:"));
    var oQunatity2 = parseInt(prompt("What is the Ordered quantity of item 2:"));
    var totalItem2 = item2*oQunatity2;
    console.log(totalItem2);
    document.getElementById("item2").innerHTML = item2;
    document.getElementById("qunatity2").innerHTML = oQunatity2;
    


    var shippingC = parseInt(prompt("What is the Shipping Charges?"));
    document.getElementById("shipping").innerHTML = shippingC;


    var totalCost = totalItem1+totalItem2+shippingC;
    document.getElementById("cost").innerHTML = totalCost;

    console.log(totalCost);

}

