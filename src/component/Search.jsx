
import React,{Component} from "react";
import axios from "axios";
import Display from "./Display";

class Serach extends Component{
    constructor(){
        super()
        this.state={
            data:{start:"",end:""},
            result:[]
        }
    }

    handleChange=(e)=>{
     const {id,value}=e.target;
     this.setState({data:{
         ...this.state.data,
         [id]:value
     }})
    }

    handleSubmit=(e)=>{
     e.preventDefault();
     axios.get(`http://localhost:8080/route?start=${this.state.data.start}&end=${this.state.data.end}`).then((res)=>{
        this.setState({result:res.data})
     })
    
    }

    render(){
       
        return (
            <>
            <form onSubmit={this.handleSubmit} >

                <input type="text" id="start" onChange={this.handleChange} placeholder="starting Destination" />
                <br />
                <input type="text" id="end" onChange={this.handleChange} placeholder="ending Destination" />
                <br />
                <input type="submit" name="Search" />
            </form>

            <Display data={this.state.result}/>
            
            </>
        )
    }
}


export default Serach;