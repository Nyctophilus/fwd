const t0 = performance.now();

/*
	...
	piece of code u want to test performance on!
	...
*/

const t1 = performance.now();
console.log(
  "This code took " + (t1 - t0) + " milliseconds."
);

/*
	If we had added each new paragraph to the body element, then the code would've been a lot slower, because this would 
	-HL  cause the browser to go through the reflow and repaint
	process for each paragraph. We really only want the browser to do this once
*/

/*
	-HL DocumentFragment

	represents a minimal document object that has no parent. It is used as a 
	-HL lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document.

	The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.

	-HL changes made to a DocumentFragment happen off-screen; there's no reflow and repaint cost while you build this. So this is exactly what we need!

	-HL const fragment = document.createDocumentFragment();
*/

/**
	-HL Reflow & Repaint

	Reflow is the process of the browser laying out the page. It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. This is a fairly expensive (slow) process.

	Repaint happens after reflow as the browser draws the new layout to the screen. This is fairly quick, but you still want to limit how often it happens.
 */

/*
		-HL 	rebuild the whole thing in a DocumentFragment

		-HL 	we could hide container, delete, and show it again -- to the cost of one reflow and two repaints.
		It's fast because hiding doesn't change the layout, it just erases that section of the screen (1 repaint). When you make the changed section visible again, that's a reflow and a repaint.


		-HL In general, if you have to make a group of changes, hide/change all/show is a great pattern to use if the changes are relatively contained.
	*/

/*
	-HL Virtual DOM 	--React!

	You don't make changes to the DOM, but make changes to another structure (a "virtual DOM") and the library calculates the best way to update the screen to match. 
	*/

/*
			-HL Reflow is the process of calculating the dimensions and position of page elements. This is a computationally intensive (slow) tasks. Repaint is the process of drawing the pixels to the screen. This is faster than reflow, but is still not a fast process. You want to make sure that your code causes the fewest number of reflows as possible.
*/

/*
	-HL Break Up Long-Running Code

	by: 			setTimeout(function, 0);


	that will cause ability to interact with the page while the code is running. It doesn't lock up or freeze the page, because of the setTimeout() calls.
*/
