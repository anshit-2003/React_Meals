# React Meals

React Meals is a web application I built while learning React.js. It's a dynamic meal ordering system that leverages various modern React features, including React hooks, context, and reducers.

## React Features and Concepts

### React Hooks

React Hooks are a set of functions that allow you to use state and other React features in functional components. In this project, we make use of several React hooks:

- **useState**: Used to manage local component state, such as meal quantities in the cart.
- **useEffect**: Enables side effects in functional components, such as fetching data when the component mounts.
- **useContext**: Provides access to context values, allowing us to share state across components.
- **useReducer**: Used in conjunction with context to manage complex state and actions in a more structured way.

### Context API

The Context API is a built-in feature in React that simplifies state management and sharing data between components. In this project, we utilize the Context API to manage global state, such as the shopping cart and user data:

- **CartContext**: A custom context that provides state and actions related to the shopping cart, making it accessible throughout the application.

### Reducers

Reducers are functions that specify how the application's state changes in response to actions. We employ reducers within the context to manage and update the cart state:

- **cartReducer**: A function that handles actions like adding items to the cart, removing items, and adjusting quantities.


## Usage

- Browse available meals in the "Meals" section.
- View meal details, including description and price.
- Add meals to the cart.
- Adjust item quantities in the cart.
- Place an order.
