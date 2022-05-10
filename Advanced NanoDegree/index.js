const fs = require("fs");

process.on("beforeExit", () => {
  console.log("Print Fifth");
});

setTimeout(() => {
  console.log("Print Third");
}, 0);

// nextTick runs after the mainline code .. before the async code
process.nextTick(() => console.log("Print Second"));

console.log("Print First");

fs.readFile(__filename, () => {
  setImmediate(() => console.log("Print Fourth"));
});

/*
	- synchronous - using nothing.
	
	- setTimeout - assigning to 0 or a second iteration.
	
	- setInterval - could have used a loop of 1 to run one time at 0 or in another iteration.
	
	- process.nextTick - to run after the synchronous code or after the polling phase if used with the file system module.
	
	- fs - with synchronous code inside to run after the polling phase.
	
	- setImmediate - within fs call to run during the check phase.
	
	- process.on - to run beforeExit or at exit.
*/
