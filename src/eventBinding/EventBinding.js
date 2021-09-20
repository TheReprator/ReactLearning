import react from "react";
import { Component } from "react";

class EventBindings extends Component {

    constructor(){
        super()
        this.state = {
            msg : 'Hello'
        }
    }

    changeMessage() {
        this.setState({
            msg : 'Good Bye!'
        })
        
    }

    render () {
        return (
            <div>
                <h1> {this.state.msg} </h1>
                <button onClick={this.changeMessage}> Change Message </button>
            </div>
            )
    }
}

export default EventBindings

/*
1)
    If we run the above program, wil print the following, 
    Console Output:
        undefined
        Uncaught TypeError: Cannot read properties of undefined (reading 'setState')

    Here 'this' is 'undefined' because the call begins from the event, you can consider it like,
    anonoymous class, which can't access the properties in android, until that is final, 
        So, here 'On click event' a separate class or context is created, which doesn't recogise the
    'this' keyword or parent context

    Note:
        'this.changeMessage' inside the render() on button click, it's just a function declaration not
        function call


2) 
    If the code is like below,
    Code:
        changeMessage() {
            this.setState({
                msg : 'Good Bye!'
            })
        }

        render () {
            return (
                <div>
                    <h1> {this.state.msg} </h1>
                    <button onClick={this.changeMessage()}> Change Message </button>
                </div>
            )
        }
    
    Then we will get the following error as follows,
        Error: Maximum update depth exceeded. This can happen when a component repeatedly calls 
        setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested 
        updates to prevent infinite loops.
        
    Explanation:
        It happens because 'this.changeMessage()' is a function call, which will get executed as soon
        as page loads.
            changeMessage() updates the state with setState, which agains renders the UI or call, render()
        function, from where again 'changeMessage()' is called. So, it's a infinite recursive call
*/