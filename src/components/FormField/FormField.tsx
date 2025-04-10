import {cloneElement, ReactElement} from 'react';
import './FormField.css'
import {TextInputProps} from "../TextInput/TextInput";

interface FormFieldProps {
    label: string;
    children: ReactElement<TextInputProps>;
    description?: string;
    id: string;
    required?: boolean;
    error?: string;
}

export const FormField = ({
                              label,
                              children,
                              error,
                              description,
                              id,
                              required = false,
                          }: FormFieldProps) => {
    const inputId = id;
    const descriptionId = `${inputId}-description`;
    const errorId = `${inputId}-error`;

    const describedBy = [
        description ? descriptionId : null,
        error ? errorId : null,
    ]
        .filter(Boolean)
        .join(' ');

    const inputWithProps = cloneElement(children, {
        id: inputId,
        'aria-describedby': describedBy || undefined,
        'aria-invalid': !!error,
        required,
    });

    return (
        <div className="form-field" style={{marginBottom: '1rem'}}>
            <label htmlFor={inputId} className="form-label">
                {label}
                {required && <span aria-hidden="true"> *</span>}
            </label>
            {description && (
                <div id={descriptionId} className="form-description">
                    {description}
                </div>
            )}
            {inputWithProps}
            {error && (
                <div id={errorId} className="form-error" role="alert">
                    {error}
                </div>
            )}
        </div>
    );
};
