import React from 'react';

function Key()
{
     const people = [{
        id: 0, 
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
      }, {
        id: 1, 
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
      }, {
        id: 2, 
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
      }, {
        id: 3, 
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
      }, {
        id: 4, 
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
      }];

      return(
        <>
        <h1>How Key works!</h1>
        <ul>
        {people.map((item)=><li key = {item.id}>{item.name}, {item.profession}</li>)}
        </ul>
        </>
      );
      
}
export default Key;


//be careful while dealing with the {} curly braces..

// id in array is often used in JSX as a key..