import { SEND_WEATHER_REQUEST, RECEIVE_WEATHER_ERROR, RECIEVE_WEATHER_RESPONSE} from './weateherTypes'
import axios from "axios";

const sendWeatherReqest=()=>{
    return{

        type: SEND_WEATHER_REQUEST
    }
    
}

const receiveWeatherResponse=(data)=>{
    return{
        type: RECIEVE_WEATHER_RESPONSE,
        payload:data
    }
}

const receiveWeatherErrror=(data)=>{
    return{
        type: RECEIVE_WEATHER_ERROR,
        payload:data

    }
}


const getWeatherInfo=(query)=>{   
    return dispatch=>{
        dispatch(sendWeatherReqest());
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=3045dd712ffe6e702e3245525ac7fa38`)
        .then((res)=>{
            dispatch(receiveWeatherResponse(res.data));
                        
        }).catch((error)=>{
            dispatch(receiveWeatherErrror(error.message))

        })
    }
}

export default getWeatherInfo;
