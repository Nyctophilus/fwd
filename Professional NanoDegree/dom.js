/*
	Node interface
	Element interface

	-HL EventTarget <-- Node <-- Element 
*/

/*
	.innerHTML 		==> return every node or text inside
	.textContent 	==> return text as it is `without css` 
	.innerText		==> return text as u see it visiually `with css applied`
 */

/*
						**********insertAdjacentHTML**********

	 	Enter the .insertAdjacentHTML() method! The .insertAdjacentHTML() method has to be called with two arguments:

		the location of the HTML
		the HTML text that is going to be inserted
		The first argument to this method will let us insert the new HTML in one of four different locations

		beforebegin – 
		afterbegin – 
		beforeend – 
		afterend -


		** mainHeading.insertAdjacentHTML(postion, HTMLtext);
	 */

/*
			--- if an element already exists in the DOM and this element is passed to .appendChild(), the .appendChild() method will move it rather than duplicating it
*/

/*
	.removeChild()
	.remove()

	The difference is that with .removeChild() must be called on the parent of the element being removed and must be passed the child to be removed, while .remove() can be called directly on the element to delete.
*/

/*

	.firstChild	
	.firstElementChild
	.parentElement
	
	The difference between .firstChild and .firstElementChild, is that .firstElementChild will always return the first element, while .firstChild might return whitespace (if there is any) to preserve the formatting of the underlying HTML source code.

*/
