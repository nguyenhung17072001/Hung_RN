export const Login = (email, password) => {

    
    return ({
        type: 'LOGIN',
        
        user: {
            email,
            password,
            
        }
    })
}

export const Logout = () => {

    return ({
        type: 'LOGOUT',
        payload: null,
    })
}

export const Registor =( email, password,phonenumber,username,id) => {

    
    return ({
        type: 'REGISTRATION',
        
        user: {
            email,
            password,
            phonenumber,
            username,
            
        }
    })
}