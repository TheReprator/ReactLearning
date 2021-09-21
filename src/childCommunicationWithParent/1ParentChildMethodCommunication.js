import React from "react";
import { Component } from "react";

export class ParentCommComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name:'Parent Component'
        }

        this.parentCommunicationMethod = this.parentCommunicationMethod.bind(this)
    }

    parentCommunicationMethod() {
        alert(`called from ${this.state.name}`)
    }

    render() {
        return <ChildCommComponent commComponent={this.parentCommunicationMethod}/>     
    }
}

export function ChildCommComponent(props){
    return (
        <div>
            <button onClick= {props.commComponent}>Child Button:  Show Alert From Parent </button>
        </div>
    )
}
/*
    In earlier examples, we had earlier pass data or method from parent component to child component but
    we hadn't done any communcation from child to parent componenet.
        So, here i had called method 'parentCommunicationMethod' at line no. 16 in ParentCommComponent
    from ChildCommComponent on click of button at line no. 28.

    Here ChildCommComponent ui is rendered, at line 21, inside render method of ParentCommComponent

    At line no 17, please note that, alert accepts string as parameter, so we had use astreicks alongwith
    string template or else we can concatenate as well
*/