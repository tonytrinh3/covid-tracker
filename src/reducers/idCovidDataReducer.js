import {INCREASE_ID_COVID_DATA} from '../actions/types';

const INITIAL_STATE = {
    id: 100
}

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case INCREASE_ID_COVID_DATA:
            // const newId = INITIAL_STATE.id + action.payload;
            // console.log(newId);
            INITIAL_STATE.id = INITIAL_STATE.id + 1;
            return {...state, id: INITIAL_STATE.id }
        default:
            return state;
    }

}