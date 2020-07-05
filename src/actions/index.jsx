
const loginAction=(val)=>{
    return{
        type:'USER',
        payload:val
    }
}

export const Login=()=>{
    return dispatch=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
            dispatch(loginAction(data))
        })
    }
}


