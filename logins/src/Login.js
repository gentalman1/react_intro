import React, { Component } from "react";
import introJs from 'intro.js'


export default class Login extends Component {


    constructor(props){
        super(props)
        {
            this.handleonChange=this.handleonChange.bind(this)
            this.handleLogin=this.handleLogin.bind(this)
        this.state={
     
            username:'',
            password:''
            
        }
        }
    }
    
    componentDidMount(){
        introJs().start()
      }

    handleLogin(e)
    {
       e.preventDefault();

      var l={username:this.state.username,password:this.state.password}
       
      console.log("name",l)
      if(l.username && l.password)
      {
          window.location.href="/Welcome"
   }

    }

    handleonChange(e){
        console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <form class="centered" onSubmit={this.handleLogin}>
                <h3><center>Sign In</center></h3>
            <div class="form-border">

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="username" value={this.state.username} onChange={this.handleonChange} data-intro='Enter email'/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleonChange} data-intro='Enter password'/>
                </div>

                

                <button type="submit" className="btn btn-primary btn-block" data-intro='Click Submit'>Submit</button>
            </div>
                
            </form>
        );
    }
}