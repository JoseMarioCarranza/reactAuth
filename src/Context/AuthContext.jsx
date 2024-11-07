import { createContext } from "react";

const AuthContext = createContext()

function AuthProvider({ children }) {
    const data = {

    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }