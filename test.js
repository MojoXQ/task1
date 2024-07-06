// // Create a JavaScript function named calculator.
// The function should take three parameters: num1, num2, and operator.
// Use a switch statement to perform the following operations based on the operator:
// +: Addition
// -: Subtraction
// *: Multiplication
// /: Division
// %: Modulus
// Return the result of the operation.
// If the operator is not one of the above, return "Invalid operator".


function calculator(num1, num2, operator) {
    return result;
    
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      case '%':
        result = num1 % num2;
        break;
      default:
        return "Invalid operator";
    }
  
    return result;
  }
  
  