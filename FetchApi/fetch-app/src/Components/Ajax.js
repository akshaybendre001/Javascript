
import React from 'react';
import ReactDOM from 'react-dom/client';


function Ajax()
{

    function loadDoc()
        {
            const xhttp = new XMLHttpRequest();

            xhttp.onload = function()
            {
                document.getElementById("Demo").innerHTML  = this.responseText;
            }

            xhttp.open("GET", "ajaxinfo.txt");
            xhttp.send();
        }

    return(
        <>
        <div>
        <p id="Demo"></p>
        <h1>This is an Example of XMLHttpRequest!!</h1>
        <button type="button" onClick="loadDoc()">Click me!</button>
        </div>
        </>
    );
}
export default Ajax;