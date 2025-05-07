import { createContext, PropsWithChildren, useContext } from "react"
import { Path, To } from "./types"

const ResolvedPathContext = createContext<Path>(undefined as any)

export interface UseResolvedPathProviderProps {
  path: Path
}

export function UseResolvedPathProvider({ children, path }: PropsWithChildren<UseResolvedPathProviderProps>) {
  return <ResolvedPathContext.Provider value={path}>
    {children}
  </ResolvedPathContext.Provider>
}

export function useResolvedPath(to: To) {
  const context = useContext(ResolvedPathContext)

  if (context === undefined) {
    throw new Error("useResolvedPath must be used within a ResolvedPathProvider")
  }

  return context
}
