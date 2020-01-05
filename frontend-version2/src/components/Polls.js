import React , {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Polls extends Component{
    state = {
        polls : []
    }
    componentDidMount(){
        axios.get('http://localhost:4001/polls')
            .then(res => {
                console.log(res);
                this.setState({
                    polls: res.data
                })
            })
    }
    render(){
        const {polls} = this.state;
        const pollsList = polls.length ? 
        (
            polls.map(poll => {
                return(
                    <div className='post card' key={poll.id}>
                        <div className='card-content'>
                            <Link to={'/polls/' + poll.id}>
                                <span className = 'card-title black-text'>
                                    {poll.name}
                                </span>
                            </Link>
                        </div>
                    </div>
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