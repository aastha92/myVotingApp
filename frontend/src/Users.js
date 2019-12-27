import React,{Component} from 'react';

class Users extends Component {
    render(){
        const {getAllUsers} = this.props;
        const {singleUser} = this.props;
        const usersList = getAllUsers.map(user=>{
            return(
                <div className='users' key={user.id}>
                    <span onClick={() => {singleUser(user.id)}}>
                        <div>Name:{user.name}</div>
                        <div>Email:{user.email}</div>
                        <div>Password:{user.password}</div>
                        <br />
                    </span>
                </div>
            )
        })

        return(
            <div className='user-list'>
                {usersList}
            </div>
        )
    }
}

export default Users;