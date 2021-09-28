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


export function CSSStyleSheetProps(props) {
    let cssClassName = props.name ? 'primary' : ''
    return (
        // <div className = {cssClassName}>
        <div className = {`${cssClassName} font-xl`} >
            <h2> CSS StyleSheet Primary</h2>
        </div>
    )
}

/*
    1)
        Here we had used method 1 to apply CSS on body,

        At line no. 10, we had imported the style from myStyle.css
        At line no. 14, we had applied the css class(named 'primary') with class name for particular 
        div tag

    2)
        We can also dynamically place the css based on some conditions like we had done at line no. 24,
        At line no. 27, we had applied multiple css class, since one is condition css(primary) 
        and other is 'font-xl'

        To apply just one, please uncomment line 26, and comment 27.

*/ 