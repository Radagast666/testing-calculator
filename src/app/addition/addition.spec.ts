
import { addition } from "./addition";


describe('addition unit tests', () => {

it('should add 2 + 2 = 4', () => {
// Pattern AAA (Arrange - Act - Assert)

// Arrange
let result = 0;

// Act
result = addition(2, 2);

// Assert
expect(result).toBe(4);
})
it('should add 10 + 10 = 20', () => {
// Arrange
let result = 0;
// Act
result = addition(10, 10);
// Assert
expect(result).toBe(20);
})

}) 