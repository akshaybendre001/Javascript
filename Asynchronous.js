//what is Asynchronous Programming?
//why do we need asynchronous programming?
//difference between synchronous and asynchronous


for(i=0; i<6; i++)
    {
        console.log("This is Task No:" +i);
    };

    console.log("Done with Synchronous Task");
//this is the simple for loop which executes line by line 
//i.e Synchronoushly it executes...no task will override the next task until and unless the task is executed one by one
// this is an example of synchronous programming

//Synchronous programming takes a long time to execute every task and also it takes much memory utilisation of the browser which makes it relatively slower.


setTimeout(()=>{
for(i=5; i<11; i++)
    {
        console.log("This is Task No:" +i);
    }
});
console.log("Done with Asynchronous Task");

//even if i have printed "Done ....." below it gets printed before the for loop 
//which means the task has been completed before the for loop task which breaks the synchronous rule
// Tasks are done simultaneously and whichever task is completed it will be printed first 
// after all the tasks has been completed the browser will run the tasks 


 myinterval = setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("Demo").innerHTML =   
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}


// Since the callback functions in the Asynchronous methods are difficult to write and difficult to debug, most modern Asynchronous methods dont use callbacks
// Instead Asynchronous programming is solved using <u>Promises</u> only..


addEventListener("click", myfoo);
function myfoo()
{
    document.getElementById("Btn").innerHTML 
    alert("Hello World!");
}
myfoo();
