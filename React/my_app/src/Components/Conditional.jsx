import React, {useState} from 'react';

function Conditional()
{

    const [Log, setLog] = useState(9);
    // let Log =7;
    // let Log;
    // console.log(Log);
    if(Log>=1 && Log<=5)
        {
            return(
                <>
                <h1><mark>Hello User 1 to User 5</mark></h1>
                </>
            );
        }

        else
        {
            return(
                <>
                <h1><mark>Hello Unknown User</mark></h1>
                </>
            );
        }
}
export default Conditional;

//if the log is not given any value the log will be undefined..