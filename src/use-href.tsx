import { createContext, PropsWithChildren, useContext } from "react"

const HrefContext = createContext<string>(undefined as any)

export interface HrefProviderProps {
  href: string
}

export function HrefProvider({ children, href }: PropsWithChildren<HrefProviderProps>) {
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
