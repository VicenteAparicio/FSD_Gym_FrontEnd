import {DESTINY} from '../types';

// Estado inicial
const initialState = {
    title : 'PONTE EN FORMA CON NOSOTROS',
    show: ''
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