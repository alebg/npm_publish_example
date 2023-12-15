"use strict";
// Simple functions to add two numbers
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAddNumbers = exports.addNumbers = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports.addNumbers = addNumbers;
// Simple function to map a sum of a number over an array of numbers
function mapAddNumbers(arr, y) {
    return arr.map((x) => x + y);
}
exports.mapAddNumbers = mapAddNumbers;
