import react from "react";
import { Component } from "react";

class MethodOneBinding extends Component {

    constructor () {
        super()
        this.state = {
            msg: 'Event Binding Method 1'
        }
    }

    changeMessage () {
        this.setState({
            msg: 'with bind Function call from event handler'
        })
    }

    render () {
        return (
            <dev>
                <h1> {this.state.msg} </h1>
                <button onClick={this.changeMessage.bind(this)}> Method Name </button>
            </dev>
        )
    }
}

export default MethodOneBinding


/*
1)
    This is method one, to bind the method with event binding(i.e. onClick, onHover, onFocus etc)
    Code:
        <button onClick={this.changeMessage.bind(this)}> Change Message </button>

2)
    Error Scenario:
    a) Code:
        <button onClick={this.changeMessage.bind}> Change Message </button>

        Console Output:
            Uncaught TypeError: Bind must be called on a function
            at bind (<anonymous>

        It happened because bind is an inbuilt function, which accepts 'this' as argument
    b) Code:
        <button onClick={this.changeMessage.bind()}> Change Message </button>

        Console Output:
            TypeError: Cannot read properties of undefined (reading 'setState')
        
        It happened because because the call begins from the event, you can consider it like,
        anonoymous class, which can't access the properties in android, until that is final, 
        So, here 'On click event' a separate class or context is created, which doesn't recogise the
        'this' keyword or parent context

3)  This method with add new Event handler or bind on every successfull update, so it will be a performance
    issue in big application

*/