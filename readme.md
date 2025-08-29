1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById find one element by its id, getElementsByClassName find all elements by same class and querySelector find first element that matches a css selector and querySelectorAll find all elements that match a css selector

2. How do you create and insert a new element into the DOM?

Ans: Using this const heading = document.createElement("h1") we can create a new element in dom and using this heading.innerText = "Hello" we can add inner text in it and using document.body.appendChild() we can insert it in parent.

3. What is Event Bubbling and how does it work?

Ans: Event Bubbling means when you click (or trigger) an event on a child element, the event first runs on that element, then it “bubbles up” and runs on its parent, then grandparent, and so on, until it reaches the top (document).

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation means instead of adding event listeners to many child elements, you put one event listener on a parent element and handle events when they “bubble up” from the children.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() is stop the deafult action of an element stopPropagation() is stops the event from moving to parent/child element
