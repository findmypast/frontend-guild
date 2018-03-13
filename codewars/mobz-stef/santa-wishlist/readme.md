Santa wants to simplify his life and offer children the possiblity to enter their whishlists via an online form.

The form should be a React component (duh) and should contain:
 - an input field for the child's name
 - a text area to describe the wish
 - a drop-down indicating the priority of the wish, from 1 to 5 - default is 1
 - an `onSubmit` action calling the function `handleSubmit`
 - a function called `handleSubmit`, which calls `send` (a function that is already provided) and passes the current state as a parameter, and also calls `event.preventDefault`
 - it should be a controlled component (i.e. using `onChange` to bind input to the component's state)

Further reading:
 - React Forms: https://reactjs.org/docs/forms.html
 - Learn about Controlled Components: https://www.codewars.com/kata/control-the-beast-controlled-components-in-reactjs
 
