const { addition, subtraction, multiplication, division, sqrt, max } = require("./math");

describe("Testing Math", ()=>{

    test("Should test addition",() => {
        expect(addition(6,2)).toBe(8);
    });
    test("Should test subtraction",()=>{
        expect(subtraction(6,2)).toBe(4);
    });
    test("Should test multiplication",()=>{
        expect(multiplication(6,2)).toBe(12);
    });
    test("Should test division",()=>{
        expect(division(6,2)).toBe(3);
    });
    test("Should test sqrt",()=>{
        expect(sqrt(64)).toBe(8);
    });
    test("Should test max",()=>{
        expect(max(6,2)).toBe(6);
    });
});