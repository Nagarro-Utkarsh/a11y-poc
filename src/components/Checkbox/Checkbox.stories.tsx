import type {Meta, StoryObj} from '@storybook/react';
import {useState} from 'react';
import {fn} from '@storybook/test';
import {Checkbox} from './Checkbox';

export const ActionsData = {
    onChange: fn(), // 👈 This mimics a real onChange handler
};

const meta = {
    component: Checkbox,
    title: 'Components/Checkbox',
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
    args: {
        ...ActionsData,
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story using internal state to handle checked status
const WithState = (args: React.ComponentProps<typeof Checkbox>) => {
    const [checked, setChecked] = useState(args.checked);

    return (
        <Checkbox
            {...args}
            checked={checked}
            onChange={(e) => {
                setChecked(e.target.checked);
                args.onChange?.(e); // 👈 Call storybook's action handler
            }}
        />
    );
};

export const Default: Story = {
    render: (args) => <WithState {...args} />,
    args: {
        id: 'remember-me',
        label: 'Remember me',
        checked: false,
    },
};

export const Checked: Story = {
    render: (args) => <WithState {...args} />,
    args: {
        id: 'subscribe',
        label: 'Subscribe to newsletter',
        checked: true,
    },
};

export const Disabled: Story = {
    render: (args) => <WithState {...args} />,
    args: {
        id: 'terms',
        label: 'Accept terms and conditions',
        checked: false,
        disabled: true,
    },
};

export const WithError: Story = {
    render: (args) => <WithState {...args} />,
    args: {
        id: 'privacy',
        label: 'Agree to privacy policy',
        checked: false,
        error: 'You must accept the policy',
    },
};
