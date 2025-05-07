import { createContext, PropsWithChildren, useContext } from "react"

const PathnameContext = createContext<string>(undefined as any)

export interface PathnameProviderProps {
  pathname: string
}

export function PathnameProvider({ children, pathname }: PropsWithChildren<PathnameProviderProps>) {
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
