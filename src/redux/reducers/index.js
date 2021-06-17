import {combineReducers} from 'redux';

import credentials from './credentials-reducer';
import destiny from './topjungle-reducer';
import action from './actions-reducer';

const rootReducer = combineReducers({
    credentials, destiny, action
});

export default rootReducer;