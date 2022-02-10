import {combineReducers} from 'redux'
import documentReducer from "./documentReducer"
import contactReducer from './contactReducer'
import educationReducer from './educationReducer'
import { firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore';
import authReducer from './authReducer'




const rootReducer = combineReducers({
    document:documentReducer,
    contact: contactReducer.apply,
    education : educationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth : authReducer
})
console.log(rootReducer)
export default rootReducer