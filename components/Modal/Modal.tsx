import * as Dialog from '@radix-ui/react-dialog'
import { IoMdClose } from 'react-icons/io'

import { FC } from 'react'

interface ModalProps {
    isOpen: boolean
    onChange: (open: boolean) => void
    title: string
    description: string
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({ children, description, isOpen, onChange, title }) => {
    return (
        <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay className='bg-neutral-900/90 backdrop-blur-sm fixed inset-0' />
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export { Modal };