import {RECEIVE_WEATHER_ERROR,SEND_WEATHER_REQUEST, RECIEVE_WEATHER_RESPONSE} from './weateherTypes';


const init={
    loading:false,
    data: {},
    error: ''
}

const weatherReducer=(state=init,action )=>{
    switch (action.type) {
        case SEND_WEATHER_REQUEST:
            return {...state,loading:true}  
         case RECIEVE_WEATHER_RESPONSE:
            return {loading:false,data: action.payload ,error: ''}    
        case RECEIVE_WEATHER_ERROR:
            return {loading:false,data: {},error:action.payload}      
        default:
            return state
    }
}

export default weatherReducer;