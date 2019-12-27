import React, {Component} from 'react';

class CreateUser extends Component {
    state={
            name : "",
            email : "",
            password : ""
        }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state);
        this.setState({
            name : "",
            email: "",
            password: ""
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name} />
                    <label>Email:</label>
                    <input type="text" id="email" onChange={this.handleChange} value={this.state.email} />
                    <label>Password:</label>
                    <input type="text" id="password" onChange={this.handleChange} value={this.state.password} /><br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateUser;