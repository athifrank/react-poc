import React from 'react'
import {Redirect,withRouter} from 'react-router-dom'
import  "../Login/Login.css";
const Login=({history})=>{
    const formSubmit=(e)=>{
        e.preventDefault();
        //return <Redirect to="/process" />
        history.push('/process')

    }
    return(
        <div>
            <form onSubmit={formSubmit}>
                <div>User Name : <input type='text'/> </div>
                <div>password  : <input type='password'/></div>
                <div><input type='submit'/></div>
            </form>
        </div>
    )
}

export default withRouter(Login);
