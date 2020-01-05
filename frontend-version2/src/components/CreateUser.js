import React , {Component} from 'react';
import axios from 'axios';


class CreateUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            poll_id: 1,
            name: '',
            email: '',
            password:'',
            errMsg: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('http://localhost:4001/users/', this.state)
        .then(res =>{
            console.log(res);
        })
        .catch(err => {
            //console.log(err); 
            this.setState({
                ['errMsg']: 'This email already exists!'
            })
        })  
    }
 
    render(){
        const {poll_id , name , email , password , errMsg } = this.state

        return(
            <div className='container'>
                <h4 className='center'>Registration Form</h4>
            
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label className='left'>Username:</label>
                        <input className='right' type='text' name="name" value={name}  onChange={this.changeHandler}/>
                    </div>

                    <div>
                        <label className='left'>Email:</label>
                        <input className='right' type='text' name="email" value={email}  onChange={this.changeHandler}/>
                        <p className='red-text'>{errMsg}</p>
                    </div>

                    <div>
                        <label className='left'>Password:</label>
                        <input className='right' type='text' name="password" value={password}  onChange={this.changeHandler}/>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
    }
    

export default CreateUser;