import React,{useState} from 'react';



function Event()
{
    const[message, setMessage] = useState();
    const handleClick = ()=>{
        setMessage("Button is Clicked");
    }
    return(
        <>
        <h3>Event Handling</h3>
        <button onClick={handleClick}>Click</button>
        { message &&<p>{message}</p>}
        </>
    );
}
export default Event;


//conditional rendering using the curcuit and displaying the message only if the message state is not empty



//   return (
//     <div>
//       <h1>Event Handling Example</h1>
//       <button onClick={handleClick}>Click Me</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };



// onMouseOver : The mouse is moved over an element
// onMouseUp : The mouse button is released
// onMouseOut : The mouse is moved off an element
// onMouseMove: The mouse is moved
// Onmousedown: mouse button is pressed
// onload : A image is done loading
// onunload: Exiting the page
// blur : Losing Focus on the element
// onchange : Content of a field changes
// onclick: Clicking an object
// ondblclick: double clicking an object
// onfocus: element getting a focus
// Onkeydown: pushing a keyboard key
// Onkeyup: keyboard key is released
// Onkeypress: keyboard key is pressed
// Onselect: the text is selected