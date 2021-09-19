import react from "react";
import { Component } from "react";

class FirstState extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome First State'
        }
    }

    updateMessage () {
        console.log(this.state.message)
        this.setState({
            message : 'Welcome New State'
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.message} </h1>
                <button onClick = { () => this.updateMessage()}> Change Message </button>
            </div>
        )
    }

}

export default FirstState

/*

1)Constructor is required to initialze the variables or objects in any programming language, here also,
    we had used to initialze the state, which can be done from any place, but constructor is the ideal
    place in any language to get it initialzed

2)You need to call any method, object, variables with this as prefix else you will get 
    below error,
         Line 8:9:  'state' is not defined  no-undef
    if the code is like below in constructor,
        state = {
            message: 'Welcome First State'
        }

3)Whenever you are using constructor, you have to make a call to 'super', else you will get following
    error as follows,
        ReferenceError: Must call super constructor in derived class before accessing 'this' or 
        returning from derived constructor

4)Even you comment message in state in constructor like below,
    this.state = {
           // message: 'Welcome First State'
        }  
        
    and try to use it in render method like below,
        render() {
         return <h1> {this.state.message} </h1>
        }

    It will not throw error, as in javascript, those are unDefined, So you will see an empty page here.

5) If the state is not defined in constructor like below,
        constructor() {
            super()
        }
    
    and trying to access it in render or any method like below,
        render() {
            return (
                <div>
                    <h1> {this.state.message} </h1>
                </div>
            )
        }

    You will get error as follows,
        TypeError: Cannot read properties of null (reading 'message')
*/