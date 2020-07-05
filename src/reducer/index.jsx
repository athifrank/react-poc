

const initialState={
    user:'sonal'
}

export const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'USER':
            return {...state,user:action.payload}
        default:
            return state;    
    }
}