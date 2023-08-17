import { Decrease_number, Increase_number } from "./actionType"

export const demoReduxActions = {
    increaseNumber: ()=>{
        return {
            type: Increase_number,
            payload:1,
        }
    },
    decreaseNumber: ()=>{
        return{
            type: Decrease_number,
            payload:-1,
        }
    }
}