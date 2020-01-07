import { combineReducers, createStore } from 'redux'
import contactReducer from '../reducers/contactReducer'
import filterReducer from '../reducers/filterReducer'
 
export default () => {
    const store = createStore(
        combineReducers({
            contacts: contactReducer,
            filters: filterReducer
        })
    )
    return store
}

