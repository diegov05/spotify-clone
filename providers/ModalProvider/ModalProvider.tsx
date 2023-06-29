"use client";

import { Modal } from '@/components';
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
            <Modal title='Test Modal' description='Test Description' isOpen onChange={() => { }}>
                Test Children
            </Modal>
        </>
    )
}

export { ModalProvider };