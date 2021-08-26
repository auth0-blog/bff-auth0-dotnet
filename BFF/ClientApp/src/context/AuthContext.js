import React, { useState, useEffect, useContext } from "react";

export const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({
    children
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const getUser = async () => {
        const response = await fetch('/auth/getUser');
        const json = await response.json();

        setIsAuthenticated(json.isAuthenticated);
        setIsLoading(false);
        if (json.isAuthenticated) setUser(json.claims);
    }

    useEffect(() => {
        getUser();
    }, []);

    const login = () => {
        window.location.href = '/auth/login';
    }

    const logout = () => {
        window.location.href = '/auth/logout';
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                user,
                isLoading,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};