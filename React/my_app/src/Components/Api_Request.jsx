import React,{useState, useEffect} from 'react';

function Api_Request()
{
    const[pics, setPics] = useState([]);

    
    const  abc = ()=>{
       fetch("https://jsonplaceholder.typicode.com/photos",
        
    ).then(response => response.json())

    .then(data => setPics(data))

    .catch(error=>
    {
        console.log("Error has been Handled", error)
    
})}

    return(
        <>
        <h1>The Api Request acts like this</h1>
        <button onClick={abc}>Click Me!</button>
        <ul>
                {pics.map(photo => (
                    <li key={photo.id}>
                        <p>{photo.title}</p>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Api_Request;




//api request is a request send by the app to the api server

// api has Endpoint(element included in ap Api request) i.e url
//Http method or the Request method

//1.GET - retrieve data from the server
//2.POST - submit data to the server
//3.PUT - Update or replace an existing resource in the server
//4.Delete - Deletes a data from the server

//1.Headers- contains metadata information about the request
//2.body- used to specify data format in json it is used in PUT & POST
//3.Authentication - To ensure security

//Response: After processing the Api request the server sends back an Api response either CONFIRMATION or ERROR message..