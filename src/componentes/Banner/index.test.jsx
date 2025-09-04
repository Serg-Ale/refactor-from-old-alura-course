import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Banner from './index';

describe('Banner', () => {
  it('renders the banner with logo', () => {
    render(<Banner />);

    const logo = screen.getByAltText('Logo do Organo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/imagens/banner.png');
  });

  it('renders the header element', () => {
    render(<Banner />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('cabecalho');
  });
});
