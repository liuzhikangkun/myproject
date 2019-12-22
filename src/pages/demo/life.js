import React from "react";
 import Child from "./child";
 import './style.less'
import {Button} from "antd";

export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
    }

    handleAdd=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    handleClick(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        let style = {
            color:'red',
        }
        return <div className='contarin'>
            <p style={style}>联办的hi</p>
            <Button>antd点击</Button>
            <button onClick={this.handleAdd}>点击1</button>
            <button onClick={this.handleClick.bind(this)}>点击2</button>
            <p>{this.state.count}</p>
            <Child></Child>
        </div>
    }
}
