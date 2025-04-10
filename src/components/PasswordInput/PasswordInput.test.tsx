import {render} from '@testing-library/react';
import {axe} from 'jest-axe';
import {PasswordInput} from './PasswordInput';

describe('PasswordInput', () => {
    it('should pass all the accessibility checks', async () => {
        const {container} = render(
            <PasswordInput id="password" value="mypassword" onChange={() => {
            }}/>
        );

        const results = await axe(container, {
            rules: {
                'label': {enabled: false}
            }
        });
        expect(results).toHaveNoViolations();
    });
});
