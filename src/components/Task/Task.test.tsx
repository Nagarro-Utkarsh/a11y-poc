import {render, fireEvent, screen} from '@testing-library/react';
import Task from './Task';
import {TaskProps} from './Task.types';
import {axe} from "jest-axe";

describe('Task component', () => {
    const mockOnArchiveTask = jest.fn();
    const mockOnPinTask = jest.fn();

    const defaultProps: TaskProps = {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
        onArchiveTask: mockOnArchiveTask,
        onPinTask: mockOnPinTask,
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders task title', () => {
        render(<Task {...defaultProps} />);
        expect(screen.getByDisplayValue('Test Task')).toBeInTheDocument();
    });

    it('calls onArchiveTask when checkbox is clicked', () => {
        render(<Task {...defaultProps} />);
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(mockOnArchiveTask).toHaveBeenCalledWith('1');
    });

    it('calls onPinTask when pin button is clicked', () => {
        render(<Task {...defaultProps} />);
        const pinButton = screen.getByRole('button');
        fireEvent.click(pinButton);
        expect(mockOnPinTask).toHaveBeenCalledWith('1');
    });

    it('does not show pin button if task is archived', () => {
        const archivedProps: TaskProps = {
            ...defaultProps,
            task: {...defaultProps.task, state: 'TASK_ARCHIVED'},
        };

        render(<Task {...archivedProps} />);
        expect(screen.queryByRole('button')).toBeNull();
    });

    it('disables checkbox if task is archived', () => {
        const archivedProps: TaskProps = {
            ...defaultProps,
            task: {...defaultProps.task, state: 'TASK_ARCHIVED'},
        };

        render(<Task {...archivedProps} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });
    it('should pass all the accessibility checks', async () => {
        const {container} = render(<Task {...defaultProps} />);
        const results = await axe(container)

        expect(results).toHaveNoViolations()
    });
});
