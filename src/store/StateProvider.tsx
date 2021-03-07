import * as React from "react";
import { Context } from "./Context";
import { useGlobalState } from "./useGlobalState";

export const StateProvider: React.FC = ({ children }) => {
    const store = useGlobalState();

    return (
        <Context.Provider value={store}>
            {children}
        </Context.Provider>
    )
};