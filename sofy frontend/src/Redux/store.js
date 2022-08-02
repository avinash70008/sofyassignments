import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";


import { loginReducer } from "./signin/reducer";

const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
    
    }) : compose;

const middleware= [thunk]
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
   
  );
  const rootReducer=combineReducers ({
   
   
        SignIn: loginReducer,
        
     

})
 export const store = createStore(rootReducer, enhancer);