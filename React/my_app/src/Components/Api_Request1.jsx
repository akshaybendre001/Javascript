import React, { useState, useEffect } from "react";


const Api_Request1 = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")

      .then((response) => response.json())
      
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
  
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
export default Api_Request1;