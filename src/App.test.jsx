import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main application structure', () => {
    render(<App />);

    // Check if main components are rendered
    expect(screen.getByText('Minha organização')).toBeInTheDocument();

    // Check if banner is rendered
    const logo = screen.getByAltText('Logo do Organo');
    expect(logo).toBeInTheDocument();

    // Check if times section exists
    const timesSection = screen
      .getByText('Minha organização')
      .closest('section');
    expect(timesSection).toHaveClass('times');
  });

  it('renders all team names', () => {
    render(<App />);

    const expectedTeams = [
      'Programação',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
      'Inovação e Gestão',
    ];

    // Check that each team appears at least once (in headings or options)
    expectedTeams.forEach((team) => {
      const teamElements = screen.getAllByText(team);
      expect(teamElements.length).toBeGreaterThan(0);
    });

    // Check that teams with collaborators have headings
    const teamsWithCollaborators = [
      'Programação',
      'Front-End',
      'Data Science',
      'Devops',
      'UX e Design',
      'Mobile',
    ];
    teamsWithCollaborators.forEach((team) => {
      const headings = screen.getAllByRole('heading', { level: 3, name: team });
      expect(headings.length).toBe(1);
    });
  });

  it('renders the form component', () => {
    render(<App />);

    // The form should have some identifiable elements
    // Since we don't have specific test IDs, we'll check for common form elements
    const form = document.querySelector('form');
    expect(form).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<App />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
