import React , {Component} from 'react';
import axios from 'axios';

class EditPoll extends Component{
    constructor(props){
        super(props)

        this.state = {
            option_ids: [],
            user_id: 1,
            name: '',
            options: ['','']
        }
    }

    componentDidMount(){
        let id = this.props.match.params.poll_id;
        axios.get('http://localhost:4001/polls/' + id)
            .then(res => {
                console.log(res);
                this.setState({
                    ['name']: res.data[0].name
                })
            })

        axios.get('http://localhost:4001/options/polls/' + id)
        .then(res => {
            console.log(res);
            const optionsnames = res.data.map(option => {return(option.name)})
            this.setState({
                ['options']: optionsnames
            })

            const optionsids = res.data.map(option => {return(option.id)})
            this.setState({
                ['option_ids']: optionsids
            })
        })

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
        let optionidscopy = [...this.state.option_ids,-1];
        this.setState({['options'] : optionscopy})
        this.setState({['option_ids'] : optionidscopy})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        let id = this.props.match.params.poll_id;
        const postParams = {
            user_id: this.state.user_id,
            name: this.state.name
        }
        axios.put('http://localhost:4001/polls/'+id , postParams)
        /* .then(res => {
            console.log(res);
            this.setState({
                poll_id : res.data.newId
            })
        }) */
        .then(res =>{
            this.state.options.map((option, index) => {
                const optionsParams = {
                    poll_id: id,
                    name: option
                }
                const optionid = this.state.option_ids[index]
                if (optionid > -1) {
                    axios.put('http://localhost:4001/options/'+optionid, optionsParams )
                } else {
                    axios.post('http://localhost:4001/options/', optionsParams )
                }    
            })
        })
        .catch(err => {
            console.log(err);
        })
        this.props.history.push('/polls')        
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
                    <h4 className='center'>Edit Poll</h4>
                </div>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <label className='left'>Poll Title:</label>
                            <input className='right' type='text' name="name" value={name}  onChange={this.changeHandler}/> 
                        </div>

                        {optionslist}

                            <button className='btn orange' onClick={this.addOptionHandler}>
                                <span >Add Option</span>
                                <i className="material-icons right">add</i>
                            </button><br /><br />

                            <button className='btn indigo' type='submit'>
                                <span >update Poll</span>
                                <i className="material-icons right">update</i>
                            </button>
                    </form>  
            </div>
        )
    }
}

export default EditPoll