import React,{useState} from 'react';
import './Form_Handling.css';

function FormHandling1()
{

    const [submit, setSubmit]=useState("");

    const handleClick = (e)=>
    {
        e.preventDefault();
        let a = document.getElementById("first").value ;
        console.log(a);
        alert("Successfully Submitted!");
    }

    const handleClick1 = ()=>
    {
        alert("Are you sure? Press ok if sure");
    }

    const handleFirst = (event) => {
        // event.preventDefault();
        setSubmit(event.target.value)
    }
    return(
        <>

        <h1><center><mark>Student Registration Form</mark></center></h1>
        <form className='form'>

         <fieldset> 
            <legend>Student's Information</legend>

        <label >First Name:</label>
        <input type="text" id="first" onChange={handleFirst}></input><br></br><br></br>

        <label >Last Name:</label>
        <input type="text" id="last"></input><br></br><br></br>

        <label>Student ID:</label>
        <input type="text" id="ID"></input><br></br><br></br>

        <label>Email:</label>
        <input type="Email" id="mail"></input><br></br><br></br>

        <label  >Address:</label>
        <input type="text" id="add"></input><br></br><br></br>
        
        <label>Gender:   </label>
        <input type="radio" name="test" value="Male"/>Male
        <input type="radio" name="test" value="Female"/>Female
        <br></br><br></br>

        
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleClick1}>Clear Form</button>   
        </fieldset>  
        

        </form>   
        </>
    );
}
export default FormHandling1;