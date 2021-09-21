import React from "react";
import { Component } from "react";

export class ParentMethodParamCommComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name:'Parent Component'
        }

        this.parentCommunicationMethod = this.parentCommunicationMethod.bind(this)
    }

    parentCommunicationMethod(childParameter) {
        alert(`called from ${this.state.name} and parameter from: ${childParameter}`)
    }

    render() {
        return <ChildMethodParamCommComponent commComponent={this.parentCommunicationMethod}/>     
    }
}

export function ChildMethodParamCommComponent(props){
    return (
        <div>
            <button onClick= {() => props.commComponent('Child Parameter')}>Child Button:  Show Alert From Parent with parameter from Child </button>
        </div>
    )
}
/*
    Here we had passed a parameter from child component to parent component method, at line 28 with arrow 
    function on click of button.
*/