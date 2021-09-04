
import * as types from '../actions/types';

const loginReducer = (state =0, action) => {

    console.log("Reducer");

    switch (action.type) {

        case types.LOGIN:
            console.log(types.LOGIN);
            return state
        case types.SET_USER_INFO:
            console.log(types.SET_USER_INFO+" data: "+state);
            return state;    
        case types.USER_FETCH_FAILED:
            console.log(types.USER_FETCH_FAILED+" data: "+state);
            return state;       
        default:
            return state;
            
    }
}
export default loginReducer