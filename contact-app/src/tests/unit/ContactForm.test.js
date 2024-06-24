import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ContactForm from '../../components/ContactForm/index';
import { mockData } from '../mockData';

describe('Testing component ContactForm', () => {
  it('Should input data in inputs and display text.', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: mockData.name } });
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: mockData.email } });

    fireEvent.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(screen.getByText(`Valeu ${mockData.name}! Vamos te avisar assim que tivermos novidades no seu email: ${mockData.email}.`)).toBeVisible();
    });
  });


  it('Should render error message if any fields are empty.', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: mockData.email } });

    fireEvent.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(screen.getByText(`Por favor, preencha os campos corretamente.`)).toBeVisible();
    });
  });

});
