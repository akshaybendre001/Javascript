let p1 = new Promise (function(resolve, reject){
 {

    console.log("This promise is pending...");
    setTimeout(()=>
    {
        console.log("This promise is fulfilled");
        resolve(true);
    }, 5000)
}
});

let p2 = new Promise (function(resolve, reject){
    {
   
    //    console.log("This promise is pending...");
       setTimeout(()=>
       {
           console.log("This promise is not fulfilled");
           reject(true);
       }, 5000)
   }
   })

// here the timer set for both the promises is 5 secs which means it should work simultaneously and not one by one i.e Asynchronous programming


// let p = new Promise(function(resolve, reject) {
//     console.log("This promise is pending");
//     setTimeout(() => {
//         alert("This promise is fulfilled");
//         resolve();  // Resolve the promise after the alert
//     }, 5000);
// });

// To handle the resolved promise
// p1.then(() => {
//     console.log("Promise has been resolved.");})
// p2.catch((error) => {
//     console.error("Promise was rejected with error:", error);
// });