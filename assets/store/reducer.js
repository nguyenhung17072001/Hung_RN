
//State
const initialState = {
    authToken: null,
    users: []
}

// Action
//Reducer
export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            const email= action.user.email;
            const password= action.user.password;
            const loginUser = state?.users?.find((item)=>item.email===email && item.password=== password)
            return {
                ...state,
                authToken: loginUser ? loginUser.email: null,
            }
        case 'LOGOUT':
            return {
                authToken: action.payload,
            }    
        case 'REGISTRATION':
            return {
                ... state,
                
                users: [
                    ...state.users,
                    {
                        uersname: action.user.username,
                        email: action.user.email,
                        phonenumber: action.user.phonenumber,
                        password: action.user.password,
                        
                    }
                ]

            }
        default: 
            return state;
    }

  
}

