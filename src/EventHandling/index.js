import React from "react";

class EventHandling extends React.Component {
    constructor() {
        super();
        this.changeText = this.changeText.bind(this);
    }
    changeText(event) {
        console.log("Working")
        console.log(event.target.value)
        console.log(this)
    }

    changeText2(event) {
        console.log("Working")
        console.log(event.target.value)
        console.log(this)
    }

    changeText3 = (event) => {
        console.log("Working")
        console.log(event.target.value)
        console.log(this)
    }
    changeText4 = (event,param1, param2) => {
        console.log(event.target.value)
        console.log(param1)
        console.log(param2)
    }
    render() {
        return (
            <div>
                <h1>type 1 - This keyword bind</h1><br />
                <input type="text" onChange={this.changeText}></input> <br />

                <h1>type 2 - This keyword bind</h1><br />
                <input type="text" onChange={this.changeText2.bind(this)}></input> <br />

                <h1>type 3 - This keyword Auto-bind using arrow function</h1><br />
                <input type="text" onChange={this.changeText3}></input> <br />
                <h1>Multiple parameter</h1><br />

                <input type="text" onChange={(event) => this.changeText4(event, "param1", "param2")}></input>
            </div>

        )
    }
}

export default EventHandling;