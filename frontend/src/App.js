import React,{Component} from 'react';
import axios from 'axios'
import Users from './Users';
import CreateUser from './createUser';

class App extends Component {

  /*
  state = {
    users:[
      {id: 1, name:'Aastha', email: 'a@gmail.com', password: "abcde"},
      {id: 2, name:'Nishith', email: 'n@gmail.com', password: "fghij"},
      {id: 3, name:'Jake', email: 'j@gmail.com', password: "klmno"}
    ]
  }
  */

  constructor(props){
    super(props);
    this.state = { users: []} ;
  }

  getAllUsersFromAPI() {
    fetch("http://localhost:4001/users")
    .then(res => res.text())
    .then(res => JSON.parse(res))
    .then(res => this.setState({users: res}))
    .catch(err => err);
  }

  componentDidMount() {
    this.getAllUsersFromAPI();
  }

  singleUser = (id) =>{
    console.log('**');
    console.log(id);
    var user = this.state.users.find(obj => {
      return obj.id === id
    });
    console.log(user);
  }

  createUser = (user) =>{
    const Url = "http://localhost:4001/users";
    console.log('***');
    let data = JSON.parse(JSON.stringify(user));
    console.log(data);
    const otherParams = {
      headers:{
        "content-type":"application/json; charset=UTF-8"
      },
      body: data,
      method:"POST"
    }

    fetch(Url,otherParams)
    .then(data => {return data.json()} )
    .then(res => console.log(res))
    .catch(err => console.log(err));

    
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
