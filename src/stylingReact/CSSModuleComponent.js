/*
    CSS Module is availabe from reach 2.0.0, below it's not available. So, make sure 'react-scripts'
    is more than 2.0.0 in package.json

    In order to use any css module, file name should have extension of fileName.module.css like the file
    'cssModule.module.css' in src/stylingReact/CSS folder

    CSS Module provide a local scope, which means where ever we have to use CSS module, we have to 
    import it where as in case of reguar css, once defined in parent component, there is no need to
    import it in child component, for further refernce kindly look into video no. 'ReactJS Tutorial - 20 - Styling and CSS Basics(720P_HD)'
*/ 
import React from 'react'
import CSSModuleChildComponent from './CSSModuleChildComponent'
import style1 from './CSS/cssModule.module.css'

function CSSModuleComponent() {
    return (
        <div className = {style1.success}>
            <h2> CSS Module Component Example </h2>
            <CSSModuleChildComponent />
        </div>
    )
}

export default CSSModuleComponent

/*
    At line 14, we had imported CSS Module with a name as style1

    At line no. 18, we used the css class name for our division, so every direct 
    element(Not child component) of the div tag will be applied with that css propertly

    At line 20, As i said the "CSS Module" will not be applicable for CSSModuleChildComponent
    <h1 className ={style1.success}> CSS Module Component Example </h1>
    <h1 className = 'error'> CSS Regular Example </h1>
    {/* 
      Line no. 41, we had used css module component, 
      Line no. 42, it's a regular css, oncee defined here or in parent component, 
      it can be used in all child component as well, without importing in child component

*/