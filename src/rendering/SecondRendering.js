import React from "react";

export function PersonInfo2({personInfo}) {
    return (
        <div>
            <h2> Hi {personInfo.name} a.k.a {personInfo.role} </h2>
        </div>
    )
}

function SecondRendering () {
    const personArray = [
        {
            name: 'Tony',
            role: 'Iron Man'
        },
        {
            name: 'Bruce',
            role: 'Hulk'
        }
    ]

    const personList = personArray.map((person, index) => <PersonInfo2 key = {index} personInfo ={person} />)
    return <div> {personList} </div>
}

export default SecondRendering


/*
    Just watch video, ReactJS Tutorial - 19 - Index as Key Anti-pattern(720P_HD), for advantages and 
    disadvatages of using index as key
*/ 