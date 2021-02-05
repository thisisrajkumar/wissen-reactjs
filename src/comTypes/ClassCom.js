import React from "react";

class ClassCom extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1 className="testClass">This is class Component</h1>
                <button onClick="">Click me</button>

            </div>
        )
    }
}

export default ClassCom;