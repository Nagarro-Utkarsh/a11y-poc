import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
    id: string;
    label: string;
    name?: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    error?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
                                                      id,
                                                      label,
                                                      name,
                                                      checked,
                                                      onChange,
                                                      disabled = false,
                                                      error,
                                                  }) => {
    const describedBy = error ? `${id}-error` : undefined;

    return (
        <div className={`checkbox-wrapper ${disabled ? 'disabled' : ''}`}>
            <label htmlFor={id} className="checkbox-label">
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    aria-invalid={!!error}
                    aria-describedby={describedBy}
                    className="checkbox-input"
                />
                <span className="checkbox-text">{label}</span>
            </label>

            {error && (
                <p id={describedBy} className="checkbox-error" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
};
