import React , {Component} from 'react';
import axios from 'axios';
import CanvasJSReact from '../lib/canvasjs.react';
import { throwStatement } from '@babel/types';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DisplayVotes extends Component{
    constructor(props){
        super(props)

        this.state = {
            poll_id: this.props.poll_id,
            user_id: 1,
            votesCount: []
        }
    }
    getVotesCount(){
        axios.get('http://localhost:4001/votes/polls/' + this.state.poll_id)
            .then(res => {
                //console.log(res);
                this.setState({
                    ['votesCount']: res.data
                })
            })
    }

    componentDidMount(){
        this.getVotesCount()
    }

    componentDidUpdate(){
        this.getVotesCount()
    }

    render(){
        const votesdata = this.state.votesCount.map(voteobj => {
            return({
                y: voteobj.total_votes, label: voteobj.name
            })
        })

        const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Poll Results"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} ({y} votes)",
				dataPoints: votesdata
			}]
		}
        /* console.log(options)

        const voteslist = this.state.votesCount.map(voteobj => {
            return( 
            <div>
                <li>{voteobj.name} : {voteobj.total_votes}</li>
            </div>)
        }) */
        return (
            <div className='container'>
                {/* <h4 className='center'>Results</h4>
                <ul>
                    {voteslist}
                </ul> */}
                <CanvasJSChart options = {options} />
            </div>
        )
    }
}
    
export default DisplayVotes;