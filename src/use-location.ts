import { useContext, createContext } from "react"
import { Location } from "./types"

const LocationContext = createContext<Location>(undefined as any)

export function useLocation() {
  const context = useContext(LocationContext)

  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider")
  }

  return context
}
