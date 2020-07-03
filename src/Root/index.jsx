import React from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Login from '../Components/Login/Login'
import ProcessManagment from '../Components/ProcessManagment/ProcessMainPage'
const Root=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/process" exact component={ProcessManagment}/>
             </Switch>
        </BrowserRouter>
    )
}
export default Root;