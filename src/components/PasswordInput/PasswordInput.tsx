import React, {useState, forwardRef} from 'react';
import './PasswordInput.css';

export interface PasswordInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label?: string;
    hasError?: boolean;
    errorMessage?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    (
        {
            id,
            label,
            hasError = false,
            errorMessage,
            ...props
        },
        ref
    ) => {
        const [visible, setVisible] = useState(false);
        const toggleVisibility = () => setVisible((prev) => !prev);

        const inputType = visible ? 'text' : 'password';
        const describedBy = errorMessage ? `${id}-error` : undefined;

        return (
            <div className="password-input-wrapper">
                {label && (
                    <label htmlFor={id} className="password-input-label">
                        {label}
                    </label>
                )}
                <div className="password-input-inner">
                    <input
                        id={id}
                        ref={ref}
                        type={inputType}
                        aria-invalid={hasError}
                        aria-describedby={describedBy}
                        className={`password-input-field ${hasError ? 'error' : ''}`}
                        {...props}
                    />
                    <button
                        type="button"
                        onClick={toggleVisibility}
                        aria-label={visible ? 'Hide password' : 'Show password'}
                        className="password-toggle-button"
                    >
                        {visible ? 'Hide' : 'Show'}
                    </button>
                </div>
                {hasError && errorMessage && (
                    <p id={`${id}-error`} className="password-input-error" role="alert">
                        {errorMessage}
                    </p>
                )}
            </div>
        );
    }
);

PasswordInput.displayName = 'PasswordInput';
