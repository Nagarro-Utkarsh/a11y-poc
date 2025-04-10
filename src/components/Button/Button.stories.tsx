import type {Meta, StoryObj} from '@storybook/react';
import {Button} from './Button';

const meta = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Login',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Cancel',
        variant: 'secondary',
    },
};

export const Ghost: Story = {
    args: {
        children: 'Learn More',
        variant: 'ghost',
    },
};

export const Large: Story = {
    args: {
        children: 'Continue',
        size: 'lg',
    },
};

export const Small: Story = {
    args: {
        children: 'OK',
        size: 'sm',
    },
};

export const FullWidth: Story = {
    args: {
        children: 'Submit',
        fullWidth: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};
