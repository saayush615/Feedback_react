import { createContext } from "react";

// createContext takes an optional default value.
// This default value is used when a component consumes the context
// WITHOUT a matching Provider above it in the component tree.
// It's useful for testing or providing a fallback.

// Default value (e.g., for when no provider is present, or initial state)
const UserContext = createContext({
    isLoggedin: false,
    userData: null
});

export default UserContext;