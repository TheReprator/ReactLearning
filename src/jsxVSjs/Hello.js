import React from "react";

//JSX Version
export const HelloJSX = () => {
    return (
        <div id='Hello' className='testClass'>
            <h1> JSX Version </h1>
        </div>
    )
   
}

/**
 * Will Print "JSX Version" in a div tag
 */

//JS Version of above
export const HelloJS = () => {
    return React.createElement("div", {id: 'Hello', className: 'testJS'}, 
    React.createElement("h1", null, "JS Version"))
}


/*
   1) Here to write 
        simple ' <h1> JSX Version </h1>'
    into JS react native,
        we have to write as below,
    React.createElement("div", null, React.createElement("h1", null, "JS Version"))


    2)So, ultimately JSX, is also converted into react native code, which is done by 
        'import React from "react";', even though it is not being used in JSX code, but this import
        is responsible for coverting the code into react
*/