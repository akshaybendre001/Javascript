import React from "react";

function Api_Errors() {

  const Err = () => {

    try
    {
      console.log("Hii This is No Error 1");
      console.log("Hii This is No Error 2");

      console.lg("Hii this is Error!!");        // error to be caught
    } 
    catch (err) 
    {
      console.error(err);
    }

    finally 
    {
        console.log("Errors wont stop the execution of the React app..")
    }
  };

    // console.lg("Hii This is No Error 3");    //external errors
    // console.lo("Hii This is No Error 4");     // external errors

  return (
    <>
      <h1>Errors will Occur!!</h1>
      <button onClick={Err}>Handle the error!</button>
    </>
  );
}
export default Api_Errors;
