
//State
const initialState = {
    currentUser: null,
    error: null,
}


//Reducer
export default (state = initialState, action) => {
    switch(action.type) {
        
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                currentUser: action.payload,
                error: null,
            };
        case 'LOG_IN_FAILURE':
        case 'REGISTER_FAILURE':
            return {
                ...state,
                error: action.payload,
            };
        case 'LOG_OUT':
            return initialState
        default: 
            return state;
    }

  
}

