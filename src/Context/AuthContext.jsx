import { createContext, useState, useEffect } from "react";
import jwtDecode from 'jwt-decode';

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false)
    const [userPayload, setUserPayload] = useState(null)

    /**
     * The `login` function sets a token in local storage, decodes the token, sets the user payload, and
     * updates the authentication status.
     */
    const login = (token) => {
        localStorage.setItem('token', token)
        const decoded = jwtDecode(token)
        setUserPayload(decoded)
        setIsAuth(true)
    }

    /**
     * The `logout` function removes the 'token' from localStorage, sets the user payload to null, and sets
     * the authentication status to false.
     */
    const logout = () => {
        localStorage.removeItem('token')
        setUserPayload(null)
        setIsAuth(false)
    }

    /* The `useEffect` hook in the provided code snippet is responsible for checking if there is a token
    stored in the local storage when the component mounts. If a token is found, it decodes the token
    using `jwtDecode`, sets the user payload with the decoded information, and updates the
    authentication status to true by calling `setIsAuth(true)`. */
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const decoded = jwtDecode(token)
            setUserPayload(decoded)
            setIsAuth(true)
        }
    }, [])

    const data = {
        isAuth,
        userPayload,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }