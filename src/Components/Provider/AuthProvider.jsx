import React, { createContext } from 'react';

export const AuthContex = createContext(null)

const AuthProvider = ({childern}) => {
    const user = {displayName: 'Al kkartra'}
    const authInfo = {
        user,
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {childern}
        </AuthContex.Provider>
    );
};

export default AuthProvider;