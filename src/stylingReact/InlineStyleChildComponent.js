import React from "react"

function InlineStyleChildComponent() {
    return (
        <div className = 'error'>
            <h2> CSS Regular Example  Child</h2>
        </div>
    )
}

export default InlineStyleChildComponent



/*
Here, at line no. 5, we had directly used the regular css file, so without importing,
all the features of the css has been applied to the particular div tag,
    As the parent component(InlineStyleComponent), had imported the "import './CSS/cssRegular.css'"
at line no.2, so, we don't need to import it at child component.

This may lead to css conflict, So, here css module comes in picture, which provides the local scoping.
*/