import react from "react";
import { Component } from "react";

class MethodThreeBinding extends Component {

    constructor () {
        super()
        this.state = {
            msg: 'Event Binding Method 3'
        }

        this.changeMessage = this.changeMessage.bind(this)
    }

    changeMessage () {
        this.setState({
            msg: 'with event binding in constructor'
        })
    }

    render () {
        return (
            <dev>
                <h1> {this.state.msg} </h1>
                <button onClick={this.changeMessage}> Method Name 3</button>
            </dev>
        )
    }
}

export default MethodThreeBinding


/*
    Here the event binding is done in constructor itself, which is called only once in the lifetime,
    So, it's the most common binding, which is used everywhere for best performace
*/