import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true,
        date:[],
     
    }

    
  
 
    }
  
    handleClick=() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => 
        this.setState({
            date:data
          })
          )
    }
  
    render() {
       // console.log("888ds",this.state.date)
      return (
        <div className="container">
          <button onClick={this.handleClick}>result</button>
          <div className="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>username</th>
                  <th>email</th>
                 <th>address</th>
                 <th>phone</th>
                  
                </tr>
              </thead>
              <tbody>
              {this.state.date.map((item) => (
     
  
                <tr>

              <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.geo.lat}<br></br>
              {item.address.street}<br></br>
              
              {item.address.suite}
              
              
              </td>
              <td>{item.phone}</td>
                 
</tr>
  ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  export default Toggle;