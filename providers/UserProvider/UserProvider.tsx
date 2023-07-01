"use client";

import { MyUserContextProvider } from '@/hooks/useUser/useUser';
import { FC } from 'react'

interface UserProviderProps {
    children: React.ReactNode
}

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export { UserProvider };