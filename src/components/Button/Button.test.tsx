import {render} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Button} from './Button';

describe('Button', () => {
    it('should pass all the accessibility checks', async () => {
        const {container} = render(<Button>Click Me</Button>);

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
