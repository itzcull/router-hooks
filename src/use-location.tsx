import { createContext, PropsWithChildren, useContext } from "react"
import { Location } from "./types"

const LocationContext = createContext<Location>(undefined as any)

export interface UseLocationProviderProps {
  location: Location
}

export function UseLocationProvider({ children, location }: PropsWithChildren<UseLocationProviderProps>) {
  return <LocationContext.Provider value={location}>
    {children}
  </LocationContext.Provider>
}

export function useLocation() {
  const context = useContext(LocationContext)

  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider")
  }

  return context
}
