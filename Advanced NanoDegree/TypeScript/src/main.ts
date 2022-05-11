const a = 4;
const b: number = 6;
const c = "5" as unknown as number;
const d = "cat ";

// -HL union types
let myvar: boolean | null | undefined;

const multiply = (num1: number, num2: number): void => {
  // void is the return type

  console.log(`${num1} * ${num2} =`, num1 * num2);
};

const add = (num1: number, num2: number): void => {
  console.log(`${num1}+${num2} =`, num1 + num2);
};

multiply(a, b);
multiply(a, c);
// multiply(a, d);

add(a, b);
add(a, c);
// add(a, d);

// -HL Example: never
const throwError = (message: string): never => {
  throw new Error(message);
};
const neverEndingLoop = (): never => {
  while (true) {}
};

/*
	Type Assertions
*/

// as keyword:
// const myVar=(req.query.param as unknown) as string;

// angle bracket notation:
// const myVar <string> (<unknown>req.query.param);

/*
	-HL Object-like types
*/

const arr1: number[] = [1, 2, 3, 4]; //array of only numbers ,, u could use union types too

// tuples
const student: [string, number, string, string] = [
  "Muhammed",
  22,
  "math",
  "science",
];

/*
	Enum
*/

enum Compass {
  North,
  South,
  East,
  West,
}

const move = (dist: number, direction: Compass) => {
  return `walk ${dist} paces ${direction}`;
};

/*
	Objects 
	use interfaces instead
*/

interface student {
  name: string;
  age?: number; // ? --> optional prop
  readonly enrolled: boolean; // readonly prop
}

interface undergrad extends student {
  major: string;
}

const stud1: undergrad = {
  name: "muhammed",
  //   age: 22,
  enrolled: true,
  major: "BEng",
};

// stud1.enrolled = false;   // readonly-error

/*
	Duck Typing
	Duck Typing is a programming concept that tests if an object meets the duck test: "If it walks like a duck and it quacks like a duck, then it must be a duck."	

	if u use other interface that acts like the previous one it will be considered the excat same 
*/

/*
	-HL Type aliases
*/

type PhD = student & {
  field: string;
};

const phd22: PhD = {
  name: "muhammed",
  enrolled: true,
  field: "Engineering",
};

/*
	Classes
*/

// Access Modifiers
class Student {
  public grade: number;
  public constructor(grade: number) {
    this.grade = grade;
  }

  private id: number | undefined; // cant be accessed outside of the class

  protected nickname: "string" | undefined; // can be accessed from parent class and child classes
}
