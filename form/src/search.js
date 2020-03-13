import React,{ Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props)
               this.state = {
                persons: []
              }
            }   
        componentDidMount() {
          axios.get('http://localhost:8080/api/getStudent').then(res => {
              const persons = res.data
              this.setState({ persons })
            })
        }  
        handleSubmit(e)
        {
            console.log("in handle>>>>>>>",e.target.value);
            
            axios.delete('http://localhost:8080/api/deleteStudent/'+e.target.value)
            .then(res => {
                const persons=res.data
                console.log("delted : ", persons);
                window.location.href="/search"
            })
        }
        handleEditSubmit(e)
        {
             
            window.location.href="/form?id="+e.target.value
            // console.log("in edit>>>>>",e.target.value);
            // axios.put('http://localhost:8080/api/getStudentById/'+e.target.value).then(res=>{
            //     const persons=res.data
            //   //  this.setState({persons})
            //   console.log("delted : ", persons);
            // })
        }
        render() {
          return (
          <div className="App">
             <div className="left">
             <table border="2">
              <tr>
                <th>id</th>
                <th>firstname</th>
                <th>username</th>
                <th>password</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
              { this.state.persons.map(person => 
                <tr>
                  <td>{person.id}</td>
                  <td>{person.firstname}</td>
                  <td>{person.username}</td>
                  <td>{person.password}</td>
                  <td>
                    
                        <button value={person.id} onClick={this.handleEditSubmit}>Edit</button>
                   
                    </td>
                    <td>  
                    <button  onClick={this.handleSubmit} value={person.id}>Delete</button>
                  </td>
                  </tr>
                )}
              </table>
            </div>    </div>
        ) }
   
}
export default Search
