import type {Meta, StoryObj} from '@storybook/react';
import {PasswordInput} from './PasswordInput';

const meta = {
    title: 'Components/PasswordInput',
    component: PasswordInput,
    tags: ['autodocs'],
    args: {
        id: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
    },
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
    args: {
        hasError: true,
        errorMessage: 'Password is required.',
    },
};

export const WithCustomPlaceholder: Story = {
    args: {
        placeholder: '••••••••',
    },
};

export const EmptyLabel: Story = {
    args: {
        label: '',
    },
};
