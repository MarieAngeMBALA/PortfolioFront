import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(!!localStorage.getItem('token'));

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAdminLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAdminLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isAdminLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
