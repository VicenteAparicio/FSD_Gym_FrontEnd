import {ACTION} from '../types';

// Estado inicial
const initialState = {
    activity: ''
};

// A la función le pasamos un estado (initialState) y una acción
const credentialsReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION :
            return action.payload;
        
        default : 
            return state
    }
}

export default credentialsReducer;