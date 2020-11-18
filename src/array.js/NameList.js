import React from 'react'
import Person from './Person'

function NameList() {
const persons=[
    {
id:1,
     name:   'Olima',
     age:11,
     skil:'java'
    },
    {
        id:2,
             name:   'Akbarali',
             age:6,
             skil:'jS'
            },
            {
                id:1,
                     name:   'Shaxnoza',
                     age:31,
                     skil:'React'
                    },
                            
]
const personList= persons.map(   person=> <Person person={person}/>)

    return <div>
         {personList}</div>
    
}

export default NameList
