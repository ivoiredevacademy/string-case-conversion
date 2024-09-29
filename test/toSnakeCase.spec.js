import { it, expect } from 'vitest';
import { toSnakeCase } from '../src/index.js';

it('should convert a string to camel case', () => {
  const result = toSnakeCase('hello world');
  expect(result).toBe('hello_world');
});