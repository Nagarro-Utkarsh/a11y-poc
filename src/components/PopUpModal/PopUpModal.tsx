import React, {useEffect, useRef} from 'react';
import './PopUpModal.css';

interface PopUpModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    imageSrc?: string;
    altText?: string;
}

export const PopUpModal: React.FC<PopUpModalProps> = ({
                                                          isOpen,
                                                          onClose,
                                                          message,
                                                          imageSrc,
                                                          altText = 'Popup image',
                                                      }) => {

    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        buttonRef.current?.focus()
    }, [buttonRef, isOpen])
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Popup Message">
            <div className="modal-content">
                <button ref={buttonRef} className="close-button" onClick={onClose} aria-label="Close popup">
                    &times;
                </button>
                {imageSrc && <img src={imageSrc} alt={altText} className="modal-image"/>}
                <p className="modal-message">{message}</p>
            </div>
        </div>
    );
};
