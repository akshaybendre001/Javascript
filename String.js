let str = "The quick brown fox jumps over the lazy dog";
function string(str)
{
     str1 = str.replaceAll(" the","");
     
     return console.log(str1)
}
string(str);
// console.log(str1);

// let str2 = "The quick brown fox jumps over the lazy dog";
// function fox()
// {
//     array = str2.split(" ");
//     newarr = array.slice("31");
//     return console.log(array);
// }
// fox();

//-------------------------------------------------------------------------------------------------------------------------------------
// let words = "The quick brown fox jumps over the lazy dog";
// function string(words)
// {
//      words1 = words.replace("the", "");
//      words2 = words1.split(" ");
     
//      return console.log(words2)
// }
// string(words);

// let statement = "The quick brown fox jumps over the lazy dog";
// let statement1 = statement.split(" ");
// let spliced = statement1.splice(0,6);
// console.log(spliced);
// function remove(statement1)
// {
//     for(i=0; i<array.length; i++)
//         {
//             if(array[i]!==array[i+6])
//                 {
//                     console.log(array[i]);
//                 }
//                 else{
                    
//                 }
//         }
//         console.log(statement1)
// }
// remove(statement1);

//----------------------------------------------------------------------------------------------------------------------------------------------
let stringg="The quick brown fox jumps over the lazy dog";
function to_remove(stringg, value)
{
    let arr = stringg.split(" "); //string to array
    for(i=0; i<arr.length; i++)
        {
            if(arr[i]==value)
                {
                    delete arr[i];
                }
                else{

                }
        }
        return console.log(arr.join(" "));  //array to string
}
to_remove(stringg, "the");