## Side Effects - Reducer and Context API

- local storage usage for storing login info of user to prevent us to no to lose the loging credentials of user after refresing while login.

- `useEffect` only run once , but if we want to re-run it while doing some action in the page we must put some dependencis.

#### Don't in Useeffect

- DON'T need to add state updating functions (as we did in the last lecture with setFormIsValid): React guarantees that those functions never change, hence you don't need to add them as dependencies (you could though)
- DON'T need to add "built-in" APIs or functions like fetch(), localStorage etc (functions and features built-into the browser and hence available globally): These browser APIs / global functions are not related to the React component render cycle and they also never change
- DON'T need to add variables or functions you might've defined OUTSIDE of your components (e.g. if you create a new helper function in a separate file): Such functions or variables also are not created inside of a component function and hence changing them won't affect your components (components won't be re-evaluated if such variables or functions change and vice-versa)

## References

## Controlled vs Uncontrolled
