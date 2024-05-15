function myfunction(e)
{
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let studID = document.getElementById("studID").value;
    let Email = document.getElementById("email").value;
    let Address = document.getElementById("Address").value;
    console.log(fname);
    console.log(lname);
    console.log(studID);
    console.log(Email);
    console.log(Address);
}

// myfunction("nikhil","aher");