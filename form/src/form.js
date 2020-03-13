import React,{ Component } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import {GlobalStyles} from './Global';
import {darkTheme,lightTheme} from './theme'

class Form1 extends Component
{
    constructor(props)
    {
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.state={
              employeeForm:{
                  id:null,
                  firstname:'',
                  username:'',
                  password:'',
                  theme:'light'
              }
        }
        console.log(this.state.employeeForm)
    }
  toggleTheme()
  {
      if(this.state.theme==='light')
      {
               this.setState={
                   state:this.state.theme
               }
      } else {
             this.setState={state:this.state.theme={theme:'dark'}}
      }
  }
   componentDidMount()
    {
        let params = (new URL(document.location)).searchParams;
let id = params.get("id");
         console.log("in edit>>>>>",id);
             axios.get('http://localhost:8080/api/getStudentById/'+id).then(res=>{
                const persons=res.data
              this.setState({id:persons.id,firstname:persons.firstname,username:persons.username,password:persons.password})
              console.log("delted : ", persons);
            })
    }

    handleSubmit(e)
    {
       e.preventDefault();
       var data={id:this.state.id,firstname:this.state.firstname,username:this.state.username,password:this.state.password}
        // let formdata = new FormData();
        // formdata.append("firstname",this.state.firstname)
        // formdata.append("username",this.state.username)
        // formdata.append("password",this.state.password)

      
        let params = (new URL(document.location)).searchParams;
        let id = params.get("id");
        if(id){
            console.log("calling update function : ",data);
            axios.put('http://localhost:8080/api/updateStudent', data);
        } else {
            if (this.state.firstname!=null&&this.state.username!=null&&this.state.password!=null) {
                
                console.log("calling insert function : ",data);
                axios.post('http://localhost:8080/api/insertstudent', data);
            }
            else{
               console.log("invellid data")  

            }
        }
      console.log("helo",data);
      window.location.href="/form"
      
    }
    handleChange(e)
    {   
        console.log(" data ",e.target.name," ",e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render(){
        return(
            <div>
             <form method="POST" onSubmit={this.handleSubmit}>  
                 <label> firstname
                 <input type="text" name="firstname"  value={this.state.firstname}
                               onChange={this.handleChange} id="firstName"/></label>
                   <br/><br/>   
                   <label> username
                 <input type="text" name="username" value={this.state.username}
                               onChange={this.handleChange} id="username"/></label>
                    <br/><br/> 
                    <label> password
                 <input type="text" name="password" value={this.state.password}
                               onChange={this.handleChange} id="password"/></label>
                    
                    <br/><br/>

                    
               <input type="hidden" value={this.state.id}/>
               <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
         <GlobalStyles/>
         <button onClick={this.toggleTheme} >change</button>
         <h1>lightTheme</h1>
    <footer></footer>
    </ThemeProvider>
               

                    <button type="submit">submit</button>     
                          
                 </form>
                 <a href="/search">Search</a>
                 
            </div>
        )
    }

}
export default Form1
 