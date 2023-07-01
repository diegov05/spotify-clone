"use client";

import { AuthModal } from '@/components';
import { FC, useEffect, useState } from 'react'

interface ModalProviderProps {

}

const ModalProvider: FC<ModalProviderProps> = () => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
        </>
    )
}

export { ModalProvider };