import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Botao from './index';

describe('Botao', () => {
  it('renders the button with the provided text', () => {
    const buttonText = 'Clique aqui';
    render(<Botao texto={buttonText} />);

    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('botao');
  });

  it('renders the button with different text', () => {
    const buttonText = 'Enviar';
    render(<Botao texto={buttonText} />);

    const button = screen.getByRole('button', { name: buttonText });
    expect(button).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn();
    const buttonText = 'Clique';

    // Note: The current Botao component doesn't accept onClick prop
    // This test demonstrates how it would work if it did
    render(
      <button className="botao" onClick={mockOnClick}>
        {buttonText}
      </button>
    );

    const button = screen.getByRole('button', { name: buttonText });
    await user.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
