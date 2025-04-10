import {render} from '@testing-library/react';
import {axe} from 'jest-axe';
import {FormField} from './FormField';
import {TextInput} from '../TextInput/TextInput';

describe('FormField', () => {
    it('should pass all the accessibility checks', async () => {
        const {container} = render(
            <FormField label="Email" id="email" required>
                <TextInput id="email" value="test@example.com" onChange={() => {
                }}/>
            </FormField>
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
