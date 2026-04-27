import { expect, test } from 'vitest';
import { calculate } from '../calculator';

test('addition, soustraction et multiplication', () => {
    expect(calculate(2, 3, '+')).toBe(5);
    expect(calculate(10, 4, '-')).toBe(6);
    expect(calculate(3, 3, '*')).toBe(9);
});