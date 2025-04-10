import React, {forwardRef} from 'react';
import './TextInput.css'

export interface TextInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type?: 'text' | 'email' | 'password' | 'search' | 'url' | 'tel';
    hasError?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            id,
            type = 'text',
            hasError = false,
            className = '',
            ...props
        },
        ref
    ) => {
        return (
            <input
                id={id}
                type={type}
                ref={ref}
                aria-invalid={hasError}
                className={`text-input ${hasError ? 'input-error' : ''} ${className}`}
                {...props}
            />
        );
    }
);

TextInput.displayName = 'TextInput';
