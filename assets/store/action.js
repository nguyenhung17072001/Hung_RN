export const Login = (credentials) => {

    
    return ({
        type: 'LOGIN_START',
        
        payload: credentials
    })
}

export const logInSuccess = (user) => ({
    type: 'LOG_IN_SUCCESS',
    payload: user,
  });
  
export const logInFailure = (error) => ({
    type: 'LOG_IN_FAILURE',
    payload: error,
});

export const register = (credentials) => ({
    type: 'REGISTER_START',
    payload: credentials,
  });
  
  export const registerSuccess = (user) => ({
    type: 'REGISTER_SUCCESS',
    payload: user,
  });
  
  export const registerFailure = (error) => ({
    type: 'REGISTER_FAILURE',
    payload: error,
  });
  
  export const logOut = () => ({
    type: 'LOG_OUT',
  });