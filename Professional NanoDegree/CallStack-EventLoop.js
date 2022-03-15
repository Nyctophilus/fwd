/*
	run-to-completion Nature of js 

	1) current synchronous code runs have to completion,

	2) events are processed when the browser isn't busy. Asynchronous code (such as loading an image) runs outside of this loop and sends an event when it is done.
*/

/*

	-HL 		synchronous func.s execute normally 'call stack'
	
	-HL			when a asynchronous piece of code invoked, it goes to browser API first then go to wait in the queue 

	-HL here's the execution is DONE!

	-HL 		whenever those asynchronous hanlder invoked, eventloop will search in the queue if there is any to fetch.
	and invoke it inside the callstack

*/

/* 
 -HL Asynchronous code is handled by the browser. When it's ready to be executed, it's moved to the queue where it waits until the Call Stack is empty. Whenever the Call Stack is empty, code moves from the Queue over to the Call Stack and gets executed.
*/

/*
	-HL setTimeout

	 gives a function over to the browser which it starts a timer. After the timer is finished, the function moves to the Queue. If the Call Stack is empty, then the function is moved to the Call Stack and executed.
*/
