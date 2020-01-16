1. What problem does the context API help solve?

        Context API helps to get rid of prop drilling. Especially, when data is being passed through
        a series of components.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        Actions are objects that have types and data known as payload. These actions are put through 
        reducers and depending on the type or payload, the reducer will manipulate the state 
        accordingly.  Reducers are functions that take state and manipulate it to return the same 
        state or a new state that differs from the original one. A store is a global object that 
        holds state for the entire app. It becomes useful when the application becomes 
        increasingly big or will become scalable.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

        Application state is state that is global to the whole of the application. It may be used 
        anywhere in the application. Whereas, component state will only be used locally within the 
        component. It cannot be accessed anywhere outside of that particular component. 
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

        Thunk is middleware that allows the calling of action creators that return a function instead 
        of an action object. The function recieves the store's dispatch method, which is then used 
        to dispatch regular synchronus actions inside the body of the function as soon as 
        asynchronus operations have completed.
1. What is your favorite state management system you've learned and this sprint? Please explain why!

        I feel that Context API has been my favorite. I was able to understand it faster. 
