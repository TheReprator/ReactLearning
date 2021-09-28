/*
Methods type to apply CSS: 
    1)CSS Stylesheet
    2)Inline Styling
    3)CSS Modules
    4)CSS in JS Modules(Styled Components as library)
*/ 

import React from "react";
import './CSS/myStyle.css'

function CSSStyleSheet() {
    return (
        <div className = 'primary'>
            <h2> CSS StyleSheet </h2>
        </div>
    )
}

export default CSSStyleSheet

/*
    Here we had used method 1 to apply CSS on body,

    At line no. 10, we had imported the style from myStyle.css
    At line no. 14, we had applied the css class(named 'primary') with class name for particular 
    div tag
*/ 