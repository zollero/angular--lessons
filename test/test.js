//This is a test javascript file.

//Create a demo of Jasmine framework.
describe("A spec suite", function() {
  it("contains a passing spec", function() {
    expect(true).toBe(true);
  });
  it("contains another passing spec", function() {
    expect(false).not.toBe(true);
  });
});

//Functions of Jasmine
//1. toBe();
//2. toEqual();
//3. toMatch(); -->RegExp
//4. toBeDefined(); --: equals with underfined
//5. toBeUndefined();
//6. toBeNull();
//7. toBeTruthy();  Translated to boolean, then equals with true.
//8. toBeFalsy(); Translated to boolean, then equals with false.
//9. toContain(); Check one element contained in a array.
//10. toBeLessThan();
describe("A spec suite", function() {
  it("contains a passing spec", function() {
    var value = 10;
    expect(value).toBeLessThan(20);
    expect(value).toBeLessThan(5);
  });
});
//11. toBeGreaterThan();
//12. toBeCloseTo();
describe("A spec suite", function() {
  it("contains a passing spec", function() {
    var value = 30.02;
    expect(value).toBeCloseTo(30, 0);
    expect(value).toBeCloseTo(20, 2);
  });
});
//13. toThrow(); Match a error throwed from a function.

//14. custom a matcher.
describe("A spec suite", function() {
  this.addMatchers({
    toBeLessThanOrEqual: function(expected) {
      return this.actual <= expected;
    }
  });
});

//
//  beforeEach(function() {})
//  afterEach(function() {})
//
