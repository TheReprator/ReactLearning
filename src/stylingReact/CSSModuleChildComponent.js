import React from "react"
//import style1 from './CSS/cssModule.module.css'

function CSSModuleChildComponent() {
    return (
        // <div className = {style1.success}>
         <div>
            <h2> CSS Module child Component Example </h2>
        </div>
    )
}

export default CSSModuleChildComponent

/*
This code is just illustration of "CSS Module" that, child component(this component) will not be able 
to directly access the css property without importing(at line no.2)

At line no.6, if we want to use the "style1.success" css property, we have to uncomment the line 2 and
comment line no. 7, else we will get the following error,


    Failed to compile.

    src\stylingReact\CSSModuleChildComponent.js
        Line 5:27:  'style1' is not defined  no-undef        

    Search for the keywords to learn more about each error.
*/ 