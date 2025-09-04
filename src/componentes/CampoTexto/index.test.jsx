import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CampoTexto from './index';

describe('CampoTexto', () => {
  it('renders the label and input field', () => {
    const label = 'Nome';
    const placeholder = 'Digite seu nome';

    render(
      <CampoTexto
        label={label}
        placeholder={placeholder}
        valor=""
        aoAlterado={() => {}}
      />
    );

    expect(screen.getByText(label)).toBeInTheDocument();
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe('INPUT');
  });

  it('displays the provided value', () => {
    const valor = 'João Silva';

    render(
      <CampoTexto
        label="Nome"
        placeholder="Digite seu nome"
        valor={valor}
        aoAlterado={() => {}}
      />
    );

    const input = screen.getByDisplayValue(valor);
    expect(input).toBeInTheDocument();
  });

  it('calls aoAlterado when input value changes', async () => {
    const user = userEvent.setup();
    const mockAoAlterado = vi.fn();

    // Create a wrapper component to properly handle the controlled input
    const TestWrapper = () => {
      const [value, setValue] = React.useState('');

      React.useEffect(() => {
        mockAoAlterado(value);
      }, [value]);

      return (
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          valor={value}
          aoAlterado={setValue}
        />
      );
    };

    render(<TestWrapper />);

    const input = screen.getByPlaceholderText('Digite seu nome');
    await user.type(input, 'Test');

    // Check that aoAlterado was called for each character
    expect(mockAoAlterado).toHaveBeenCalledTimes(5); // initial '' + 4 characters
    expect(mockAoAlterado).toHaveBeenLastCalledWith('Test');
  });

  it('sets required attribute when obrigatorio is true', () => {
    render(
      <CampoTexto
        label="Nome"
        placeholder="Digite seu nome"
        valor=""
        aoAlterado={() => {}}
        obrigatorio={true}
      />
    );

    const input = screen.getByPlaceholderText('Digite seu nome');
    expect(input).toHaveAttribute('required');
  });

  it('does not set required attribute when obrigatorio is false', () => {
    render(
      <CampoTexto
        label="Nome"
        placeholder="Digite seu nome"
        valor=""
        aoAlterado={() => {}}
        obrigatorio={false}
      />
    );

    const input = screen.getByPlaceholderText('Digite seu nome');
    expect(input).not.toHaveAttribute('required');
  });

  it('has correct CSS class', () => {
    render(
      <CampoTexto
        label="Nome"
        placeholder="Digite seu nome"
        valor=""
        aoAlterado={() => {}}
      />
    );

    const container = screen.getByText('Nome').closest('div');
    expect(container).toHaveClass('campo-texto');
  });
});
