// npm i --save-dev jasmine @types/jasmine

// create script 'test':'jasmine'

// npm test init .. to create the spec folder

/*
	-HL Syntax
*/

// describe(“suite description”, () => {
//     it(“describes the spec”, () => {
//         const myVar = true;
//         expect(myVar).toBe(true);
//     });
// });

// Comparisons

// Truthiness

// Matchers

/*
	-HL Comparisons
*/

// .toEqual(expected value) checks if tested object is the same object

// .toBe (expected reference) checks if the tested value is equal to the expected value

/*
	-HL Truthiness

	.toBeTruthy()passes when The expectation has any non-zero value
	The expectation evaluates to true

	.toBeFalsy()passes when the value is:
	0
	'' (an empty string)
	undefined
	null
	NaN

	If you just need the Boolean value of false, use .toEqual()
*/

/*
	-HL Numerical Matchers

	.toBeCloseTo(expected value, precision)
		Passes if a value is within a specified precision of the expected value
		Precision is optional and is represented the number of decimal points to check (defaults to 2)


	.toBeGreaterThan(expected value)
	.toBeLessThan(expected value)
	.toBeGreaterThanOrEqual(expected value)
	.toBeLessThanOrEqual(expected value)
*/

/*
	-HL Negating Other Matchers

		In JavaScript, use the ! to negate
		In TypeScript, use not
		In Jasmine, use .not
	

	-HL Exceptions

		.toThrow(expected value)
		.toThrowError(expected value, expected message) (expected value and expected message are optional)
	

	-HL Other Matchers

		.toContain(expected value)
		.toMatch(expected value)
		.toBeDefined()
		.toBeUndefined()
		.toBeNull()
		.toBeNan()
*/

/*
	FIXME Example: async/await

	it('expects asyncFun() result to equal value',
	async () =>{
	const result=await asyncFun();
	expect(result).toEqual(value);
	});
*/

// .toBeResolved() tests ifaPromise is resolved
// .toBeRejected() tests ifaPromise is rejected
// .toBeRejectedWith(expected value) tests if the expected error is returned
