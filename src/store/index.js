import { createStore, combineReducers } from 'redux';
import filterReducer from '../store/filter/reducer';
import clinicListReducer from '../store/clinic/reducer'

const reducers = combineReducers({
    filterReducer,
    clinicListReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;