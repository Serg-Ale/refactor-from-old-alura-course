import { describe, it, expect } from 'vitest';

// Simple utility function tests
describe('Utility Functions', () => {
  it('should demonstrate basic test structure', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  it('should handle string operations', () => {
    const greeting = 'Hello';
    const name = 'World';
    const result = `${greeting} ${name}`;

    expect(result).toBe('Hello World');
    expect(result).toContain('Hello');
    expect(result).toHaveLength(11);
  });

  it('should work with arrays', () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((n) => n * 2);

    expect(doubled).toEqual([2, 4, 6, 8, 10]);
    expect(doubled).toHaveLength(5);
    expect(doubled).toContain(6);
  });

  it('should handle async operations', async () => {
    const asyncOperation = () => Promise.resolve('success');

    const result = await asyncOperation();
    expect(result).toBe('success');
  });
});
