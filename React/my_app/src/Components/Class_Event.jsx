import React from 'react';

class Class_Event extends React.Component{

    handleClick()
    {
        console.log("Hello this is Event!");
    }
    render(){
    return(
        
        <>
        <button onClick={this.handleClick}>Click Here!</button>
        </>
    );
    }
}
export default Class_Event;