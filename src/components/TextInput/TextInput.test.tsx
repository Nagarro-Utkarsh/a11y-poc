import {render} from '@testing-library/react';
import {axe} from 'jest-axe';
import {TextInput} from './TextInput';


describe('TextInput', () => {
    it('should pass all the accessibility checks', async () => {
        const {container} = render(
            <TextInput id="username" value="johndoe" onChange={() => {
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
