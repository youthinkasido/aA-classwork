export const receiveTodos = (todos) => ({
    type: RECEIVE_TODOS,
    todos
});




//actions => reducer => changes the app state (which lives in store)

// containers?

//webpack mode?

// in order for a component to have props, must it be a child of another component?

// Component - Js function that oppitionally takes args called props and
// returns a react element.

// store - where the state lives, component needs state when data changes overtime

// keys - any object requires key

// middleware - intercepted action that will eventually redirect to a reducer.

// reducer - takes in a distpatched action and updates the state accordingly

// actions - are just POJO with key and value

// mapStateToProps - // map slice of state to props object

//mapDispatchToProps - creates an object with an action
< App name={name}/>

// Container serves as an interface between the store and the component it wraps