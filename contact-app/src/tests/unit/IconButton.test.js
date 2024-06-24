import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconButton from '../../components/IconButton/index';


describe('Testing component IconButton', () => {
    it('Should render and fireEvent.', async () => {
        
        delete window.location;
        window.location = { href: '' };

        const link = 'http://localhost:3000/';

        render(<IconButton goToLink={link}/>);
        const img = screen.getByAltText('Seta para ir para outra pag');
        
        expect(img).toBeVisible();

        userEvent.click(img);

        await waitFor(() => {
            expect(window.location.href).toBe(link);
        });
    });

});
