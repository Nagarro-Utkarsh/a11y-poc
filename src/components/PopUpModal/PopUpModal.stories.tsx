import type {Meta, StoryObj} from '@storybook/react';
import {PopUpModal} from './PopUpModal';

const meta = {
    title: 'Components/PopUpModal',
    component: PopUpModal,
    tags: ['autodocs'],
    args: {
        isOpen: true,
        onClose: () => alert('Modal closed'),
        message: 'This is a dynamic message passed to the modal!',
        imageSrc: 'https://via.placeholder.com/150',
    },
} satisfies Meta<typeof PopUpModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutImage: Story = {
    args: {
        imageSrc: '',
        message: 'This is a message-only modal.',
    },
};

export const WithLongMessage: Story = {
    args: {
        message:
            'This is a much longer message to demonstrate how the modal handles overflow or wrapping content. It should still look good and remain usable.',
    },
};

export const Closed: Story = {
    args: {
        isOpen: false,
    },
};
