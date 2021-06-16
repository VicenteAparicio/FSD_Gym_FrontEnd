import {LOGIN,LOGOUT} from '../types';

// Estado inicial
const initialState = {
    user : {},
    token : ''
};

// A la función le pasamos un estado (initialState) y una acción
const credentialsReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN :
            return action.payload;
        
        case LOGOUT:
            return initialState;
        
        default : 
            return state
    }
}

export default credentialsReducer;