1 -- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- Answer -

1 - `getElementById()` - Selects a specific element in HTML by its given id.

2 - `getElementsByClassName()` - Selects all elements with the same class and returns an HTMLCollection. It’s similar to an array, but not exactly an array.

3 - `querySelector()` - Selects an element using a CSS selector. Inside the brackets, use `#` for id, `.` for class, or the tag name for tags. It returns the first element it finds for that class or tag.

4 - `querySelectorAll()` - Works like `querySelector`, but the difference is that `querySelector` returns only the first element, whereas `querySelectorAll` returns all elements of the same class or tag. It returns a nodeList.


2 -- How do you create and insert a new element into the DOM?
- Answer -

To create or insert a new element in the DOM, follow these steps:

1 - First, select the parent container in HTML where the new element will be placed.

2 - `document.createElement("elementIWantToMake")` - Use this to create a new element.

3 - `elementIWantToMake.innerHTML = ```  - Place the HTML structure or element inside this template string.

4 - Finally, insert the new element into the parent container using `appendChild()`.


3 -- What is Event Bubbling and how does it work?
- Answer -

Event Bubbling - When an event occurs on a child element in the DOM, it gradually bubbles up to its parent, grandparent, and so on. If both the child and its parent have eventListeners, clicking the child will also trigger the parent’s event. Like bubbles rising in water when someone exhales underwater.


4 -- What is Event Delegation in JavaScript? Why is it useful?
- Answer -

Event Delegation - Instead of adding separate eventListeners to each child element, add an eventListener to the parent element. Then access the children through the parent.

It is useful because:

a - You don’t need separate listeners for many child elements; the parent listener works.

b - Reduces code repetition.

c - Adding new children won’t cause problems because the parent already has the listener.


5 -- What is the difference between preventDefault() and stopPropagation() methods?
- Answer -

`preventDefault()` stops the default action of an event.

`stopPropagation()` stops the event from bubbling from childNode to parentNode in the DOM.
