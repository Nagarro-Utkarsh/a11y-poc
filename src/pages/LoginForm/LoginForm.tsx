import {useEffect, useRef, useState} from 'react';
import {FormField} from "../../components/FormField/FormField.tsx";
import {TextInput} from "../../components/TextInput/TextInput.tsx";
import {PasswordInput} from "../../components/PasswordInput/PasswordInput.tsx";
import {Checkbox} from "../../components/Checkbox/Checkbox.tsx";
import {Button} from "../../components/Button/Button.tsx";
import './LoginForm.css'
import {PopUpModal} from "../../components/PopUpModal/PopUpModal.tsx";
import successIcon from '../../assets/success-svgrepo-com.svg'

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({});
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleShowModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);

    // Focus username field on mount
    useEffect(() => {
        usernameRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: typeof errors = {};

        if (!username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!password.trim()) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        // Focus first error field
        if (Object.keys(newErrors).length > 0) {
            if (newErrors.username) {
                usernameRef.current?.focus();
            } else if (newErrors.password) {
                passwordRef.current?.focus();
            }
            return;
        }

        // Proceed with login
        handleShowModal()
    };

    return (
        <>
            <form className={'login-form'} onSubmit={handleSubmit} noValidate>

                <FormField
                    label="Username"
                    id="username"
                    required
                    error={errors.username}
                >
                    <TextInput
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        ref={usernameRef}
                        aria-describedby={errors.username ? 'username-error' : undefined}
                        aria-required="true"
                    />
                </FormField>
                <FormField
                    label="Password"
                    id="password"
                    required
                    error={errors.password}
                >
                    <PasswordInput
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ref={passwordRef}
                        aria-describedby={errors.password ? 'password-error' : undefined}
                        aria-required="true"
                    />
                </FormField>


                <Checkbox
                    id="rememberMe"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />

                <Button type="submit">Login</Button>
            </form>
            <PopUpModal
                isOpen={isOpen}
                onClose={handleCloseModal}
                message="Login Success"
                imageSrc={successIcon}
                altText="Login  Success Icon"
            />
        </>
    );
};
