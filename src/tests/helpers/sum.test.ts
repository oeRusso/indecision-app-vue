import { expect, test } from 'vitest'
import { addArray, sum } from '../../helpers/sum';

test('adds 1 + 2 to equal 3', () => {
  // preparacion
  const a = 1;
  const b = 2;

  // estimulo
  const result = sum(a, b);

  // el comportamiento esperado
  expect(result).toBe(a + b)
})

test('show return 0 if array is empty', () => {
  const numberArray: number[] =  [];
  const result = addArray(numberArray);
  expect(result).toBe(0)  
})

test('should return the proper value of the addarray function', () => {
  const numberArray: number[] = [1, 2, 3, 4, 5];
  const result = addArray(numberArray);
  expect(result).toBe(15)
})

test('should return the proper value of the addarray function', () => {
  const numberArray: number[] = [1, 2, 3, 4, 5];
  const result = addArray(numberArray);
  expect(result).toBe(15)
})