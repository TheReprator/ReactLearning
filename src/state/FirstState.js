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
        this.setState({
            message : 'Welcome New State'
        }, () => console.log(this.state.message))
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

6) To render the UI, you need to call,setState is ansynchronous in nature, 
    Here if you implement updateMessage in following way,

         updateMessage () {
            this.state.message = 'Welcome New State'
            console.log(this.state.message)
        }

    OnClick of button, updateMessage is called, here 'this.state.message' value is getting updated, 
    you can check console for that, but UI will not be rendered, hence the same old 
    message(Welcome First State) will be displayed.
        So. to render the UI, we have to call it as per code, i.e.
            updateMessage () {
                console.log(this.state.message)
                this.setState({
                    message : 'Welcome New State'
                })
            }

7)setState is Ansynchronous in nature, like to know, whther the task has been done or not, you can for
  callBack function to check,
        Example:

         updateMessage () {
            this.setState({
                message : 'Welcome New State'
            }, () => console.log('callBack Log: ' + this.state.message))

             console.log('synchronous Log: '+this.state.message)
        }

    Here, whenver the state get updated, arrow function console log will be printed, so for first call,
    log will be as follows,
        synchronous Log: Welcome First State
        callBack Log: Welcome New State
*/