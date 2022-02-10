import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './redux/reducers/rootReducer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore } from 'redux-firestore' ;
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore' ;

const firebaseConfig = {
  apiKey: "AIzaSyDo3f4scs1PpAC3xkRtHZ-hN1s90KDZBg8",
  authDomain: "izio-ae93b.firebaseapp.com",
  projectId: "izio-ae93b",
  storageBucket: "izio-ae93b.appspot.com",
  messagingSenderId: "615487974752",
  appId: "1:615487974752:web:be6498084e20771cacc205"
};


const reduxStore= createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)));


firebase.initializeApp(firebaseConfig);
firebase.firestore()


ReactDOM.render(

    <BrowserRouter>
     <Provider store={reduxStore}>
       <ReactReduxFirebaseProvider
         firebase={firebase}
         config={firebaseConfig}
         dispatch={reduxStore.dispatch}
         createFireStoreInstance={createFirestoreInstance}>
           <App/>
         </ReactReduxFirebaseProvider>
       
    </Provider> 
  
    </BrowserRouter>
,
  document.getElementById('root')
);