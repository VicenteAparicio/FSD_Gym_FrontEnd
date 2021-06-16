import {combineReducers} from 'redux';

import credentials from './credentials-reducer';
import destiny from './topjungle-reducer';

const rootReducer = combineReducers({
    credentials, destiny
});

export default rootReducer;