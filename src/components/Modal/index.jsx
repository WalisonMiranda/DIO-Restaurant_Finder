import React, { useEffect } from 'react';

import Portal from "./Portal";

import { Dialog, Overlay } from './styles';

export default function Modal({ children, open, onClose }) {
    useEffect(() => {
        const onEsc = (e) => {
            if(e.keyCode === 27) onClose();
        }

        window.addEventListener('keydown', onEsc);

        return () => window.removeEventListener('keydown', onEsc);
    }, [onClose]);
    
    if (!open) return null;

    const onOverlayClick = () => onClose();
    const onDialogClick = (e) => e.stopPropagation();
    
    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}>
                    {children}
                </Dialog>
            </Overlay>
        </Portal>
    )
}
