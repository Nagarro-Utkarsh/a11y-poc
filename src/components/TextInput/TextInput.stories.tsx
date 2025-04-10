import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import {TextInput} from './TextInput';

const meta = {
    title: 'Components/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const inputStyle = {maxWidth: 320};

// ⚠️ Custom render functions go here to allow useState properly

const ControlledInput = (args: React.ComponentProps<typeof TextInput>) => {
    const [value, setValue] = useState('');
    return (
        <TextInput
            {...args}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={inputStyle}
        />
    );
};

// 📖 Stories
export const Default: Story = {
    render: (args) => <ControlledInput {...args} />,
    args: {
        id: 'default',
        placeholder: 'Enter your name',
    },
};

export const WithTypeEmail: Story = {
    render: (args) => <ControlledInput {...args} />,
    args: {
        id: 'email',
        type: 'email',
        placeholder: 'Enter your email',
    },
};

export const WithErrorState: Story = {
    render: (args) => <ControlledInput {...args} />,
    args: {
        id: 'error',
        placeholder: 'This has an error',
        hasError: true,
    },
};

export const Disabled: Story = {
    args: {
        id: 'disabled',
        placeholder: 'Disabled input',
        disabled: true,
        style: inputStyle,
    },
};

export const WithCustomStyles: Story = {
    render: (args) => <ControlledInput {...args} />,
    args: {
        id: 'custom',
        placeholder: 'Custom class',
        className: 'bg-yellow-50 border-yellow-300',
    },
};
