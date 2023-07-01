"use client";

import { FC, useEffect } from 'react'
import { Modal } from '../Modal/Modal';
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useAuthModal } from '@/hooks';

interface AuthModalProps {

}

const AuthModal: FC<AuthModalProps> = () => {

    const supabaseClient = useSupabaseClient()
    const router = useRouter();
    const { session } = useSessionContext()
    const { onClose, isOpen } = useAuthModal()

    useEffect(() => {
        if (session) {
            router.refresh()
            onClose()
        }
    }, [session, router, onClose]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <Modal title='Welcome Back' description='Login to your account.' isOpen={isOpen} onChange={onChange}>
            <Auth supabaseClient={supabaseClient} magicLink theme='dark' appearance={{
                theme: ThemeSupa,
                variables: {
                    default: {
                        colors: {
                            brand: "#404040",
                            brandAccent: "#22c55e"
                        }
                    }
                }
            }} providers={["github"]} />
        </Modal>
    )
}

export { AuthModal };