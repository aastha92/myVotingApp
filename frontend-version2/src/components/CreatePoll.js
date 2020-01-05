import React , {Component} from 'react';
import axios from 'axios';

class CreatePoll extends Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: 1,
            name: '',
            //option1: null,
            //option2: null
            options: ['','']
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }


    changeOptionHandler = (e) => {
        let optionscopy = [...this.state.options];
        optionscopy[parseInt(e.target.name)] = e.target.value; 
        this.setState({['options'] : optionscopy})
    }

    addOptionHandler = (e) => {
        e.preventDefault()
        let optionscopy = [...this.state.options,''];
        this.setState({['options'] : optionscopy})
    }


    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        const postParams = {
            user_id: this.state.user_id,
            name: this.state.name
        }
        axios.post('http://localhost:4001/polls/', postParams )
        /* .then(res => {
            console.log(res);
            this.setState({
                poll_id : res.data.newId
            })
        }) */
        .then(res =>{
            this.state.options.map(option => {
                const optionsParams = {
                    poll_id: res.data.newId,
                    name: option
                }
                axios.post('http://localhost:4001/options/', optionsParams )    
            })
        })
        .catch(err => {
            console.log(err);
        })        
    }

    render() {
        const {user_id , name , options } = this.state
        
        let optionslist = options.map((option, index) => {
            return(
                <div>
                <label className='left'>Option {index+1}:</label>
                <input className='right' type='text' name={index} value={option}  onChange={this.changeOptionHandler}/>
            </div> 
            )
        })
        
        return (
            <div className='container'>
                <div className='container'>
                    <h4 className='center'>New Poll</h4>
                </div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label className='left'>Poll Title:</label>
                        <input className='right' type='text' name="name" value={name}  onChange={this.changeHandler}/>
                    </div>

                    {optionslist}

                    <button onClick={this.addOptionHandler}>Add Option</button><br /><br />
                    <button type='submit'>Create Poll</button>
                </form>
                
            </div>
        )
    }
}

export default CreatePoll;