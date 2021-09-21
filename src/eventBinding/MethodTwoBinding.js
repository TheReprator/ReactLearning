import react from "react";
import { Component } from "react";

class MethodTwoBinding extends Component {

    constructor () {
        super()
        this.state = {
            msg: 'Event Binding Method 2'
        }
    }

    changeMessage () {
        this.setState({
            msg: 'with ArrowFunction'
        })
    }

    render () {
        return (
            <dev>
                <h1> {this.state.msg} </h1>
                <button onClick={() => this.changeMessage()}> Method Name 2 </button>
            </dev>
        )
    }
}

export default MethodTwoBinding

/*
Here in following code,
    <button onClick={() => this.changeMessage()}> Method Name 2 </button>
in onClick Event, paranthesis is required because we are calling the event handler and
returing their value
*/