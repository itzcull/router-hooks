import { createContext, useContext } from "react"
import { Path, To } from "./types"

export interface ResolvedPathProviderProps {
  path: Path
}

const ResolvedPathContext = createContext<Path>(undefined as any)

export function useResolvedPath(to: To) {
  const context = useContext(ResolvedPathContext)

  if (context === undefined) {
    throw new Error("useResolvedPath must be used within a ResolvedPathProvider")
  }

  return context
}
