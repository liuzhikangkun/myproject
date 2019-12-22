import React from "react";

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    render() {
         return <div>
            <p>联办的hi</p>
        </div>
    }
}
