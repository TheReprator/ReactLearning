import { Component }  from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        },
        () => {
            console.log("callBack update: "+this.state.count)
        })
    }

    incrementBatchRequest() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    incrementBy5() {
        this.incrementWithPreviousRequest()
        this.incrementWithPreviousRequest()
        this.incrementWithPreviousRequest()
        this.incrementWithPreviousRequest()
        this.incrementWithPreviousRequest()
    }

    incrementWithPreviousRequest() {
        this.setState((previousState) => ({
            count: previousState.count + 1
        }), () => {
            console.log("callBack PreviousRequest: "+this.state.count)
        })
    }

    render() {
        return (
            <div>
                <h1> Count: {this.state.count} </h1>
                <button onClick ={ () => this.increment()}> Increment </button>
                <br />
                <button onClick = { () => this.incrementBatchRequest()}> Increment by 5 with batch Update request</button>
                <br />
                <button onClick = { () => this.incrementBy5()}> Increment by 5 </button>
            </div>
        )
    }

}

export default Counter

/*
 1)increment(), increments the count by 1

 2)incrementBatchRequest(), call the increment() 5 times, So the ideal output sould be 5, if default is 0
  but real output is 1,
    with current output console log as:
        callBack update: 1
        callBack update: 1
        callBack update: 1
        callBack update: 1
        callBack update: 1
    
    It happen because, react groups the multiple 'setState' calls into a single update call for 
    it's optimization or better performance.
        So, in our scenario, all calls are merged into a single call.

 3)incrementWithPreviousRequest() : So whenever we have to update the state based on previous state,
    we need to pass function as an arguement to setState.
        So, here we had done it through arrow function, as follows,
        
        this.setState((previousState) => ({
            count: previousState.count + 1
        }))

        Here we passed the previous state as argument to arrow function, then use it to retrive and
        do the operation.
    
 4)incrementBy5(): Here incrementWithPreviousRequest() is called 5 times, but as we know, 
    react groups the multiple 'setState' calls into a single update call for it's optimization or 
    better performance 
        but since we are using the previous state as argument for the manipulation in the setState method,
    we can update the UI. 

    So the console log for this method, is as follows,
        callBack PreviousRequest: 5
        callBack PreviousRequest: 5
        callBack PreviousRequest: 5
        callBack PreviousRequest: 5
        callBack PreviousRequest: 5

*/