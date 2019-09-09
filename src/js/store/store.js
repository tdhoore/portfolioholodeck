import { createStore } from "redux";

const initState = {
    pageTitle: "Home"
};

const rootReducer = (state = initState, action)=> {
    if(action.type === "EXAMPLE") {
        return {
            
        }
    }
};

const store = createStore(rootReducer);

export default store;