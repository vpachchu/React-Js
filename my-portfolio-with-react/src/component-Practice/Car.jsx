import { Component } from "react";
import React from "react";

class Car extends Component{
    constructor(props){
        super(props)
        this.state={
            brand:"ford",
            model:"mustang",
            color:"green",
            year:"1954"
        }
    }
    changeBrand=()=>
    {
        this.setState({brand:"something"})

    }
   
    render(){

        return(
            <div className="carContainer">
                <p>my car is {this.state.brand} </p> 
                <input onChange={this.changeBrand}/>
            </div>
        )
    }

}

export default Car;