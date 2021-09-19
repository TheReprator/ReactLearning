import react from "react";
import { Component } from "react";

export const DestrictingFirstFunction = (props) => {
    const {name, role} = props
    return <h1> Actor: {name}, aka : {role} </h1>
}

/*
Here we are destructing the parameter in function body, so we are converting the props into particular
respective variables in functin body
*/
export const DestrictingSecondFunction = ({name, role}) => {
    return <h1> Actor: {name}, aka : {role} </h1>
}

/*
Here we are destructing the variables in paramter itself
*/


export class DestructingClass extends Component {
    render () {
            const {name, role} = this.props
            return <h1> Actor: {name}, aka : {role} </h1>
        }
}
/*
Here we are destructing the parameter in render function body, so we are converting the props 
into particular respective variables 
*/

export class DestructingStateClass extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            message: "vikram: " 
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1,
            message: "satyajeet"
        })
    }

    render () {
            const {count, _ } = this.state
            return (
                <div>
                    <h1> Count is: {count} </h1>
                    <button onClick = { () => this.increment()}>Increment</button>
                </div>
            )
        }
}
/*
Here we are destructing the states in render function body, so we can skip the variable with '_' if not 
needed
*/