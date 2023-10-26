import React from "react";
import { useState } from "react";

interface IAuth {
    token: string | null;
    user: any | null;
}

type AuthContextType = {
    authData: IAuth;
    signIn: (data: IAuth) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [authData, setAuthData] = useState<IAuth>({
        token: null,
        user: null
    });

    const signIn = (data: IAuth) => {
        setAuthData({
            token: data.token,
            user: data.user
        })
    }


    return (
        <AuthContext.Provider value={{ authData, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}