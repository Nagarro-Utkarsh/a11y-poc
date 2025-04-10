import {render} from '@testing-library/react';
import {axe} from 'jest-axe';
import {PopUpModal} from './PopUpModal';

describe('PopUpModal component', () => {
    it('should pass all accessibility checks when open', async () => {
        const {container} = render(
            <PopUpModal
                isOpen={true}
                onClose={() => {
                }}
                message="Test accessibility message"
                imageSrc="https://via.placeholder.com/150"
            />
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });

    it('should pass all accessibility checks when closed', async () => {
        const {container} = render(
            <PopUpModal
                isOpen={false}
                onClose={() => {
                }}
                message="Test message while hidden"
                imageSrc=""
            />
        );

        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
