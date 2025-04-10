import type {Meta, StoryObj} from '@storybook/react';
import React, {useState} from 'react';
import {FormField} from './FormField';
import {TextInput} from '../TextInput/TextInput';

const meta = {
    title: 'Components/FormField',
    component: FormField,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {table: {disable: true}}, // handled manually
    },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<
    Omit<React.ComponentProps<typeof FormField>, 'children'>
>;

const inputStyle = {maxWidth: 320};

// ✅ Component wrapper to safely use hooks
const FormFieldWrapper = (args: Omit<React.ComponentProps<typeof FormField>, 'children'>) => {
    const [value, setValue] = useState('');

    return (
        <FormField {...args}>
            <TextInput
                id={args.id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                hasError={!!args.error}
                style={inputStyle}
            />
        </FormField>
    );
};

// ─── Stories ─────────────────────────────

export const Default: Story = {
    args: {
        id: 'fullName',
        label: 'Full Name',
    },
    render: (args) => <FormFieldWrapper {...args} />,
};

export const WithDescription: Story = {
    args: {
        id: 'username',
        label: 'Username',
        description: 'Must be unique and at least 6 characters.',
    },
    render: (args) => <FormFieldWrapper {...args} />,
};

export const Required: Story = {
    args: {
        id: 'email',
        label: 'Email Address',
        required: true,
    },
    render: (args) => <FormFieldWrapper {...args} />,
};

export const WithError: Story = {
    args: {
        id: 'emailError',
        label: 'Email Address',
        error: 'Please enter a valid email address.',
    },
    render: (args) => <FormFieldWrapper {...args} />,
};
