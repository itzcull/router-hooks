import { createContext, PropsWithChildren, useContext } from "react"

const HrefContext = createContext<string>(undefined as any)

export interface UseHrefProviderProps {
  href: string
}

export function UseHrefProvider({ children, href }: PropsWithChildren<UseHrefProviderProps>) {
  return <HrefContext.Provider value={href}>
    {children}
  </HrefContext.Provider>
}

export function useHref() {
  const context = useContext(HrefContext)

  if (context === undefined) {
    throw new Error("useHref must be used within a HrefProvider")
  }

  return context
}
