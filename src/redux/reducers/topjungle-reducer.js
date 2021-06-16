import {DESTINY} from '../types';

// Estado inicial
const initialState = {
    destiny : 'PONTE EN FORMA CON NOSOTROS'
};

// A la función le pasamos un estado (initialState) y una acción
const destinyReducer = (state = initialState, action) => {
    switch(action.type){
        case DESTINY :
            return action.payload;
                
        default : 
            return state
    }
}

export default destinyReducer;