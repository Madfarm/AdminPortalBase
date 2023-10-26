import { useState, FC, ReactNode } from "react";
import * as React from 'react';

interface IAuth {
    token: string | null;
    user: any | null;
}

interface AuthProps {
    children: any
}

type AuthContextType = {
    authData: IAuth;
    signIn: (data: IAuth) => void;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider: FC<React.PropsWithChildren<AuthProps>> = ({children}) => {
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

