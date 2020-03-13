import React, { Component } from "react";
import introJs from 'intro.js'


export default class Welcome extends Component {


    constructor(props){
        super(props)
        {
            this.handleonChange=this.handleonChange.bind(this)
            this.handleLogin=this.handleLogin.bind(this)
        this.state={
     
            firstname:'',
            lastname:'',
            startdate:new Date(),
            enddate:new Date()
            
        }
        }
    }
    componentDidMount(){
        introJs().start()
      }
    handleLogin(e)
    {
       e.preventDefault();

      var l={firstname:this.state.firstname,lastname:this.state.lastname,startdate:this.state.startdate,enddate:this.state.enddate}
      
      console.log("name",l)
      if(l.firstname && l.lastname)
      {
          window.location.href="/Final"
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
                <h3><center>Fill Below Data</center></h3>
            <div class="form-border">

                <div className="form-group">
                    <label>Firstname</label>
                    <input type="text" className="form-control" placeholder="Enter firstname" name="firstname" value={this.state.firstname} onChange={this.handleonChange} data-intro='Enter firstname'/>
                </div>

                <div className="form-group">
                    <label>Lastname</label>
                    <input type="text" className="form-control" placeholder="Enter lastname" name="lastname" value={this.state.lastname} onChange={this.handleonChange} data-intro='Enter lastname'/>
                </div>

               
                <div className="form-group">
                    <label> Start Date</label>
                    <input type="date" className="form-control"  name="startdate" value={this.state.startdate} onChange={this.handleonChange} data-intro='Enter start date'/>
                </div>

                <div className="form-group">
                    <label>End Date</label>
                    <input type="date" className="form-control"  name="enddate" value={this.state.enddate} onChange={this.handleonChange} data-intro='Enter end date'/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" data-intro='Click'>Next</button>
            </div>
                
            </form>
        );
    }
}