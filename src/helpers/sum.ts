export function sum(a: number, b: number) {
    return a + b
  }

  export const addArray = (array: number[]) => {
    return array.reduce((acc, curr) => acc + curr, 0)
  }