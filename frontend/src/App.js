import React,{Component} from 'react';
import Users from './Users';
import CreateUser from './createUser';

class App extends Component {
  state = {
    users:[
      {id: 1, name:'Aastha', email: 'a@gmail.com', password: "abcde"},
      {id: 2, name:'Nishith', email: 'n@gmail.com', password: "fghij"},
      {id: 3, name:'Jake', email: 'j@gmail.com', password: "klmno"}
    ]
  }

  singleUser = (id) =>{
    var user = this.state.users.find(obj => {
      return obj.id === id
    });
    console.log(user);
  }

  createUser = (user) =>{
    user.id = Math.random();
    let users = [...this.state.users,user];
    this.setState({
      users:users
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <h3>***welcome***</h3>
        <Users getAllUsers = {this.state.users} singleUser={this.singleUser} />
        <CreateUser createUser={this.createUser} />
      </div>
    );
  }
}
  
export default App;
