// for development/testing purposes only
monitorEvents(document);
unmonitorEvents(document);

/*
		****EventTarget Interface****
	
	.addEventListener()
	.removeEventListener()
	.dispatchEvent()

*/

/*
						-HL EVENT PHASES

	- the capturing phase
	- the at target phase
	- the bubbling phase

	capturing phase: when event fired! capturing begins ...> start decending from 
	window > document > html > body >.. so on till finds the target element

	at target phase: Most event handlers run here

	bubbling phase: the event will "bubble" upward to the parent, and keep bubbling until something handles it or it hits the document.
*/
// -HL Decendent DOM-Tree structure https://video.udacity-data.com/topher/2017/December/5a2f0488_ud117-phases-of-event-flow/ud117-phases-of-event-flow.svg

/*
	.addEventListener(type, listener, useCapture)

	useCapture: false by Default ==> which means it uses bubbling by default
*/

// However, in this code, .addEventListener() is called with three arguments with the third argument being true (meaning it should invoke the listener earlier, during the capturing phase!).
// document.addEventListener('click', function () {
//    console.log('The document was clicked');
// }, true);

/*
		-HL Event Delegation

		.addEventListener to the parent to not over number of listeners & its handlers
		u can event.target to gain direct access to each element inside the parent element!


		-HL if (event.target.nodeName === 'SPAN')   // ← verifies target is desired element
*/

/*
		-HL DOMContentLoaded Event

		document.addEventListener('DOMContentLoaded', function () {
          	console.log('DOM loaded!')
      	});


		 -HL .onload() 
		  waits until all of the images, stylesheets, etc. have been loaded (everything referenced by the HTML.)
*/
