import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Polls extends Component{
    state = {
        polls : []
    }
    /* componentDidMount(){
        axios.get('https://fluid-tangent-259519.appspot.com/polls')
            .then(res => {
                console.log(res);
                this.setState({
                    polls: res.data
                })
            })
    } */

    getpolldata(){
        axios.get('https://fluid-tangent-259519.appspot.com/polls')
            .then(res => {
                //console.log(res);
                this.setState({
                    polls: res.data
                })
            })
    }

    componentDidMount() {
        this.getpolldata()
    }

    componentDidUpdate() {
        this.getpolldata()
    }

    deleteHandler(e,poll_id){
        e.preventDefault()
        axios.delete('https://fluid-tangent-259519.appspot.com/options/delete/poll/' + poll_id)
        .then(res=>{
            axios.delete('https://fluid-tangent-259519.appspot.com/polls/' + poll_id )
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render(){
        const {polls} = this.state;
        const pollsList = polls.length ? 
        (
            polls.map(poll => {
                const editlink = "/polls/edit/"+poll.id;
                return(
                    
                        <Link to={'/polls/' + poll.id}>
                            <div className='post card' key={poll.id}>
                                <div className='card-content'>
                                    <span className = 'card-title black-text'>
                                    <div className='row'>
                                            <div className='col s10'>
                                                {poll.name}
                                            </div>

                                            <div className='col s2'>
                                                <button onClick={(e) => this.deleteHandler(e,poll.id)} className='right btn-floating red darken-3 smwidth'>
                                                    {/* <span >delete</span> */}
                                                    <i className="material-icons right">delete</i>
                                                </button>
                                            
                                                <Link to={editlink}>
                                                    <button className='right btn-floating orange smwidth'>
                                                        {/* <span>Edit</span> */}
                                                        <i className="material-icons right">edit</i>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </span>
                                
                                </div>
                            </div>
                        </Link>
                    
                )
            })
        ) : 
        (
            <div className='center'></div>
        )
      return (
        <div className="container">
            <h4 className='center'>Polls</h4>
            {pollsList}
            
        </div>
        )
    }
}

export default Polls;