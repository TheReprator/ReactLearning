import React from "react";

export function PersonInfo1({personInfo}) {
    return (
        <div>
            <h2> Hi {personInfo.name} a.k.a {personInfo.role} </h2>
        </div>
    )
}

export function PersonInfo1_Key({personInfo, key}) {
    return (
        <div>
            <h2> key is: {key}, Hi {personInfo.name} a.k.a {personInfo.role} </h2>
        </div>
    )
}

export function PersonListRendering1 () {
    const personArray = [
        {
            id: "one",
            name: 'Tony',
            role: 'Iron Man'
        },
        {
            id: "two",
            name: 'Bruce',
            role: 'Hulk'
        }
    ]
    let personList = personArray.map(person => <PersonInfo1 personInfo ={person} />)
    //let personList = personArray.map(person => <PersonInfo1 key ={person.id} personInfo ={person} />)
    //let personList = personArray.map(person => <PersonInfo1_Key key ={person.id} personInfo ={person} />)
    return <div> {personList} </div>
}

/*
    1)
        Here with PersonListRendering1, at line no. 32, we will get the following warning,

        Console Error:
            index.js:1 Warning: Each child in a list should have a unique "key" prop.
    
        Explanation:
            Whenever react, displays or render a list, it expect a unique key for every element for it's
            optimization, so that he doesn't have to render the whole list on update, delete, insert etc
            operations.

    2)
        In order to sort the issue at note 1), we need to provide the key properties with some value,
        which we are doing at line no. 33, so just uncomment the line 33, and comment the 32, 34

    3)
        we can't use the key properties to pass it to chil component, as we have done in line no. 34,
        If we go for line 34, following are the results,

        User Output:
            key is: , Hi Tony a.k.a Iron Man
            key is: , Hi Bruce a.k.a Hulk

        Console Error:
            Warning: PersonInfo1_Key: `key` is not a prop. Trying to access it will result in `undefined`
            being returned. If you need to access the same value within the child component, you should 
            pass it as a different prop. (https://reactjs.org/link/special-props)

        Explanation:
            We can clearly see, the key is not rendered in User Window, So, if we want to use the same key
            to child component, we need to pass it as different property like below,

            Declaration:
            export function PersonInfo1_Key({personInfo, newKey}) {
                return (
                <div>
                    <h2> key is: {newKey}, Hi {personInfo.name} a.k.a {personInfo.role} </h2>
                </div>
            )

            Call:
            let personList = personArray.map(person => <PersonInfo1_Key key ={person.id} newKey ={person.id} personInfo ={person} />)
*/