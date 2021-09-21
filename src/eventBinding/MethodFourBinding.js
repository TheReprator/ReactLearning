import react from "react";
import { Component } from "react";

class MethodFourBinding extends Component {

    constructor() {
        super()
        this.state = {
            msg: 'Event Binding Method 4'
        }
    }

    clickHandle = () => {
        this.setState({
            msg: 'With Arraw Function as Properties'
        })
    }

    render() {
        return (<div>
                <h1>{this.state.msg}</h1>
                <button onClick = {this.clickHandle}> Method Name 4</button>
            </div>)
    }

}

export default MethodFourBinding

/*
Here we have defined an arrow function as class properties, at line no 13-18, then used that
arrow function on onClick event at line no. 23
*/