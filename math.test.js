// math.test.js
import { factorial, fibonacci } from './math.js';

describe('Funciones matemáticas', () => {
  describe('factorial', () => {
    test('factorial(0) === 1', () => {
      expect(factorial(0)).toBe(1);
    });

    test('factorial(1) === 1', () => {
      expect(factorial(1)).toBe(1);
    });

    test('factorial(5) === 120', () => {
      expect(factorial(5)).toBe(120);
    });
  });

  describe('fibonacci', () => {
    test('fibonacci(0) === 0', () => {
      expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci(1) === 1', () => {
      expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci(7) === 13', () => {
      expect(fibonacci(7)).toBe(13);
    });
  });
});
