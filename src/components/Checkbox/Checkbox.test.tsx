import {render} from '@testing-library/react';
import {axe} from 'jest-axe';
import {Checkbox} from './Checkbox';

describe('Checkbox', () => {
    it('should pass all the accessibility checks', async () => {
        const {container} = render(
            <Checkbox id="remember" label="Remember me" checked onChange={() => {
            }}/>
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
