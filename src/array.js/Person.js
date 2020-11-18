import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>I a{person.name}  I am {person.age} years old , I know {person.skil} </h1>
        </div>
    )
}

export default Person
