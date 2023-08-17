const initialState = {
    number:100,
    age: 20,
    name: 'Kien',
    dssv: []
}

export const demoReduxReducer = (state = initialState,action)=>{
    console.log("action: ", action);
    
        switch(action.type){
            case 'Increase_number':{
                state.number += action.payload
                return {...state}
            }
            case 'Decrease_number':{
                state.number += action.payload
                return {...state}
            }
            default:
                return state
        }
}