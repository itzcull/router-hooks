import { createContext, PropsWithChildren, useContext } from "react"

const PathnameContext = createContext<string>(undefined as any)

export interface UsePathnameProviderProps {
  pathname: string
}

export function UsePathnameProvider({ children, pathname }: PropsWithChildren<UsePathnameProviderProps>) {
  return <PathnameContext.Provider value={pathname}>
    {children}
  </PathnameContext.Provider>
}

export function usePathname() {
  const context = useContext(PathnameContext)

  if (context === undefined) {
    throw new Error("usePathname must be used within a PathnameProvider")
  }

  return context
}
