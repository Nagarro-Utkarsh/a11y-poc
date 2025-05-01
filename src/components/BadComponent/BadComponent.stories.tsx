// BadComponent.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import BadComponent from './BadComponent';

const meta: Meta<typeof BadComponent> = {
    component: BadComponent,
    title: 'Accessibility/BadComponent',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BadComponent>;

export const Default: Story = {};
