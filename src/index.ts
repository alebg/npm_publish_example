// Simple functions to add two numbers

export function addNumbers(a: number, b: number): number {
  return a + b;
}

// Simple function to map a sum of a number over an array of numbers
export function mapAddNumbers(arr: number[], y: number): number[] {
  return arr.map((x) => x + y);
}