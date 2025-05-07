import { createContext, PropsWithChildren, useContext } from "react";
import type { To } from "./types";

interface NavigateOptions {
  /** Replace the current entry in the history stack instead of pushing a new one */
  replace?: boolean;
  /** Adds persistent client side routing state to the next location */
  state?: any;
  /** Wraps the initial state update for this navigation in a {@link https://react.dev/reference/react-dom/flushSync ReactDOM.flushSync} call instead of the default {@link https://react.dev/reference/react/startTransition React.startTransition} */
  flushSync?: boolean;
}

interface NavigateFunction {
  (to: To, options?: NavigateOptions): void | Promise<void>;
  (delta: number): void | Promise<void>;
}

const NavigateContext = createContext<NavigateFunction>(undefined as any)

export interface UseNavigateProviderProps {
  navigate: NavigateFunction
}

export function UseNavigateProvider({ children, navigate }: PropsWithChildren<UseNavigateProviderProps>) {
  return <NavigateContext.Provider value={navigate}>
    {children}
  </NavigateContext.Provider>
}

export function useNavigate() {
  return useContext(NavigateContext)
}
