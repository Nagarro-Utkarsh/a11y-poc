import {render} from '@testing-library/react';
import {axe} from 'jest-axe';
import BadComponent from "./BadComponent";


describe('Button', () => {
    it('should pass all the accessibility checks', async () => {
        const {container} = render(<BadComponent/>);

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
