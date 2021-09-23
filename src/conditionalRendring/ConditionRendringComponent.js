import React from "react";
import { Component } from "react";

class ConditionalRendingComp extends Component {

    constructor() {
        super()
        this.state = {
            isLoginSuccess: false
        }

        this.changeLoginStatus = this.changeLoginStatus.bind(this)
    }

    changeLoginStatus() {
        this.setState((previousState) => ({
            isLoginSuccess: !previousState.isLoginSuccess
        }), () => console.log(this.state.isLoginSuccess))
    }

    render() {
        let loginStatus = this.state.isLoginSuccess

        let message
        if(loginStatus)
            message = 'Vikram'
        else
            message = 'Visitor'
            
        return (
            <div>
                <button onClick = {this.changeLoginStatus}>Toggle Login Status </button>
                <h1>Welcome {message}</h1>
            </div>
        )
    }
}

export default  ConditionalRendingComp

/*
1)
    Conditional rending is not possible in react native like if we do below in,
    Code:
        render() {
        let loginStatus = this.state.isLoginSuccess
 
        return (
            <div>
                <button onClick = {this.changeLoginStatus}>Toggle Login Status </button>
                if(loginStatus)
                    <h1>Welcome Vikram</h1>
                else
                    <h1>Welcome Visitor</h1>
            </div>
        )}

    Output:
        Toggle Login Status if(loginStatus)
            Welcome Vikram
        else
            Welcome Visitor
    
    Explaination:
            We can clearly see here that, condition rendring or condition didn't work under the return 
        or HTML jsx content. If it is done, the same will be displayed in view as well like above

    

2)
    So from point 1, we had moved our conditional code, before the return or html tag.

3)
    In line no. 22, when we are trying to use desctructive declaration like below,
             const {loginStatus} = this.state  
    It's not updating the UI correctly, but in line no. 18, state property is getting updated correctly,
    we can see it from console log.
    
*/