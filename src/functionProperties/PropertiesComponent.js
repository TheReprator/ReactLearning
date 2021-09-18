import react from "react";
import { Component } from "react";

export const GreetFunctionProperties = (properties) => {
    console.log(properties)
    return <h3> Hello {properties.name} aka {properties.role} </h3>
}

/*
    1)Properties is used to dynamically fetch the elements from the included component.
    2)You can give any name to the properties aka props, properties, vikram or anyName
    3)properties or props are immutable, which means, 
        properties.name = 'Vikram'
    is not allowed, and will throw error 
        "TypeError: Cannot assign to read only property 'name' of object '#<Object>'"
*/

export class GreetClassProperties extends Component {
    render() {
        return <h3> Hello {this.props.name} aka {this.props.role} </h3>
    }
}

/*
    1)To access the properties, from the class component, you need to call it as 'this.props',
        where, this refers to current class, props is internally defined as member object
*/

export const GreetFunctionMultiProperties = (properties) => {
    return (
        <div>
            <h3> Hello {properties.name} aka {properties.role} </h3>
            {properties.children}
        </div>
    )
}

/*
    1)Here we have returend the HTML content inside brackets because, we need to render multiple
        elements, for which we also required the div tag.
            As JSX can render only one elements from a function, to return or render multiple elements
        it need to be enclosed in a div tag, else it will report error
    
    2) Here 'properties.children' will render any enclosed elements, if it's present
*/

export class GreetClassMultiProperties extends Component {
    render() {
        return (
        <div>
            <h3> Hello {this.props.name} aka {this.props.role} </h3>
            {this.props.children}
        </div>
        )
    }
}

/*
    same as GreetFunctionMultiProperties except it's a class
*/