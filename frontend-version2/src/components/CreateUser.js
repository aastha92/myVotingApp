import React , {Component} from 'react';
import axios from 'axios';


class CreateUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password:'',
            errMsg: ''
        }
    }

    signupchangeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    signupHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://fluid-tangent-259519.appspot.com/auth/signup', this.state)
        .then(res =>{
            console.log(res.data);
            this.props.history.push('/polls')
        })
        .catch(err => {
            console.log(err); 
            this.setState({
                ['errMsg']: 'This email already exists!'
            })
        })  
         
    }

    loginHandler = (e) => {
        e.preventDefault()
        //console.log(this.state);
        let loginParams = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('https://fluid-tangent-259519.appspot.com/auth/login', loginParams)
        .then(res =>{
            console.log(res.data);
            this.props.history.push('/polls')
        })
        .catch(err => {
            //console.log(err); 
            this.setState({
                ['errMsg']: 'This email already exists!'
            })
        })      
    }

    loginchangeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }
 
    render(){
        const { name , email , password , errMsg } = this.state

        return(
            <div className='container'>
                <div className='row'fg><h4 className='center col s12 l12 '>Registration Form</h4></div>
            
                <div className="row">
                    <div className="col s12 l6 container">
                        <div className='card'>
                            <div className='card-content'>
                                <h6 className='card-title center'>LOGIN</h6>
                                <p className='center text-brown'>(For Creating a new account)</p>
                                <form> 
                                    {/* onSubmit={this.submitHandler}> */}
                                    <div className='input-field'>
                                        <input type='text' name="email" value={email}  onChange={this.loginchangeHandler}/>
                                        <p className='red-text'>{errMsg}</p>
                                        <label>Email:</label>
                                    </div>
                                    <div className='input-field'>
                                        <input type='text' name="password" value={password}  onChange={this.loginchangeHandler}/>
                                        <label>Password:</label>
                                    </div>
                            
                                    
                                    <div className='center loginbtn'>
                                        <button className='btn indigo' type='submit' onSubmit={this.loginHandler}>login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 l6 container">
                        <div className='card'>
                            <div className='card-content'>
                                <h6 className='card-title center'>SIGNUP</h6>
                                <p className='center text-brown'>(Already have an existing account)</p>
                                <form onSubmit={this.submitHandler}>
                                    <div className='input-field'>
                                        <input type='text' name="name" value={name}  onChange={this.signupchangeHandler}/>
                                        <label>Username:</label>
                                    </div>
                                    <div className='input-field'>
                                        <input type='text' name="email" value={email}  onChange={this.signupchangeHandler}/>
                                        <p className='red-text'>{errMsg}</p>
                                        <label>Email:</label>
                                    </div>

                                    <div className='input-field'>
                                        <input type='text' name="password" value={password}  onChange={this.signupchangeHandler}/>
                                        <label>Password:</label>
                                    </div>
                                    <div className='center'>
                                        <button className='btn indigo' type='submit' onSubmit={this.signupHandler}>login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    }
    

export default CreateUser;