document.getElementsByClassName("demo")[0].innerHTML = "New Employee Registration"; // by class name

document.getElementsByTagName("legend")[0].innerHTML = "New Employee Details";   // by tag name

document.getElementsByTagName("button")[1].innerHTML = "clear button";     

document.getElementById("button").innerHTML = "New Submit";  // by id

document.getElementsByTagName("h1")[0].style.color = "black";  // by style manipulating css

document.getElementById("click")[0].style.color = "red";

function myfunction()
{
    alert("Successfully Submitted!!");
}

function myfunction1()
{
    alert("Are you sure you want to clear the form?");
    
}