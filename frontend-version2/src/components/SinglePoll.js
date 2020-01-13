import React , {Component} from 'react';
import axios from 'axios';
import DisplayVotes from './DisplayVotes'

class SinglePoll extends Component{
    state = {
        poll : null,
        options: null,
        selected: null,
        user_id: 1
    }
    componentDidMount(){
        let id = this.props.match.params.poll_id;
        axios.get('http://localhost:4001/polls/' + id)
            .then(res => {
                //console.log(res);
                this.setState({
                    ['poll']: res.data[0]
                })
            })

        axios.get('http://localhost:4001/options/polls/' + id)
        .then(res => {
            //console.log(res);
            this.setState({
                ['options']: res.data
            })
        })

    }

    optionClickHandler(option_id) {
        //console.log(option_id);
        this.setState({
            ['selected']: option_id
            
        })
    }

    submitHandler= (e) =>{
        e.preventDefault()
        //console.log(this.state);
        
        const postParams = {
            option_id: this.state.selected,
            user_id: this.state.user_id,
            poll_id: this.props.match.params.poll_id
        }

        axios.post('http://localhost:4001/votes', postParams)
        .then(res => {
            //console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    render(){
        const poll = this.state.poll ? (
            <div className='SinglePoll'>
                <h4 className='center'>{this.state.poll.name}</h4>
            </div>
        ) : (
            <div className='center'></div>
        )

        const optionslist = this.state.options ? ( this.state.options.map(option => {

            let cardclass = 'post card';
            if(this.state.selected === option.id){
                cardclass = 'post card grey darken-3 white-text';
            }
            //console.log(option)
            return(
                
                <li key={option.id} onClick={() => this.optionClickHandler(option.id)}>
                    <div className={cardclass}>
                        <div className='card-content'>
                            <span className = 'card-title'>
                                {option.name}
                            </span>
                        </div>
                    </div>
                </li>
            )
        }) ) : (
            <div className='center'></div>
        )

      return (
        <div className="container">
            <h4 className='center'>{poll}</h4>
            <ul className='center'>
                <form onSubmit={this.submitHandler}>
                    {optionslist}
                    <button className='btn indigo' type='submit'>
                        <span >Sumbit Result</span>
                        <i className="material-icons right">send</i>
                    </button>

                    <br/><br />

                    {/* <a href="#results"> */}
                        {/* <button className='btn green darken-3' type='submit'>
                            <span >Show Result</span>
                            <i className="material-icons right">pie_chart_outlined</i> */}
                        {/* </button> */}
                    {/* </a> */}

                </form>
            </ul><br/><br/>
            <hr/><br/>
            {/* <div id='results'>bbbbb</div> */}
                <DisplayVotes  poll_id={this.props.match.params.poll_id}/>
            
        </div>
        )
    }
}

export default SinglePoll;