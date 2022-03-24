## useReducer

- useReducer demo Snipperts

```
import { useReducer } from 'react';

    function reducer(state, action) {
      // ...
    }

    function MyComponent() {
      const [state, dispatch] = useReducer(reducer, { age: 42 });

```

- `reducer`: The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
- `initialArg`: The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
- optional `init`: The initializer function that specifies how the initial state is calculated. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).

### useReducer vs useState

- useState is easy to use and easy to implement.
- when we have a more complex logic then we can do it in with useReducer.
