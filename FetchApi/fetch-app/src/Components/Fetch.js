import React, { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let p = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "User 1",
      }),
    });

    p.then((res) => res.json()).then((data) => {
      console.log(data);
      setData(data); 
    });
  }, []); 

  return (
    <>
      <h1>Fetch Component</h1>
      
      
        <div>
          <h2> Data:</h2>
          <pre>{JSON.stringify(null, 2)}</pre>
        </div>
      
    </>
  );
}

export default Fetch;
