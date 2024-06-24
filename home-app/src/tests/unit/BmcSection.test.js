import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BmcSection from './../../components/BmcSection'; // Adjust the path according to your file structure

describe('BmcSection', () => {
  it('renders without crashing', () => {

    render(<BmcSection />);

    expect(screen.getByText(/altura/i)).toBeInTheDocument();
    expect(screen.getByText(/peso/i)).toBeInTheDocument();
  });

  it('calculates BMI correctly', () => {

    render(<BmcSection />);

    fireEvent.change(screen.getByPlaceholderText(/ex: 1.65m/i), { target: { value: '1.65' } });
    fireEvent.change(screen.getByPlaceholderText(/ex: 70.0kg/i), { target: { value: '70.0' } });
    fireEvent.click(screen.getByText(/enviar/i));

    expect(screen.getByText(/o seu imc é/i)).toBeInTheDocument();
    expect(screen.getByText(/de acordo com a oms o seu imc indica que vc está com/i)).toBeInTheDocument();
  });

  it('shows error message when inputs are invalid', () => {

    render(<BmcSection />);

    fireEvent.change(screen.getByPlaceholderText(/ex: 1.65m/i), { target: { value: '' } });
    fireEvent.change(screen.getByPlaceholderText(/ex: 70.0kg/i), { target: { value: '' } });
    fireEvent.click(screen.getByText(/enviar/i));

    expect(screen.getByText(/por favor, preencha os campos corretamente./i)).toBeInTheDocument();
  });

  it('resets form and clears errors', () => {

    render(<BmcSection />);

    fireEvent.change(screen.getByPlaceholderText(/ex: 1.65m/i), { target: { value: '1.65' } });
    fireEvent.change(screen.getByPlaceholderText(/ex: 70.0kg/i), { target: { value: '70.0' } });
    fireEvent.click(screen.getByText(/enviar/i));
    fireEvent.click(screen.getByText(/calcular novamente/i));

    expect(screen.getByText(/enviar/i)).toBeInTheDocument();

    expect(screen.queryByText(/o seu imc é/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/de acordo com a oms o seu imc indica que vc está com/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/por favor, preencha os campos corretamente./i)).not.toBeInTheDocument();
  });
});
