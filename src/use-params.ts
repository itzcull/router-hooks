import { useContext, createContext } from "react"

type Params = Record<string, string>

const ParamsContext = createContext<Params>(undefined as any)

export function useParams() {
  const context = useContext(ParamsContext)

  if (context === undefined) {
    throw new Error("useParams must be used within a ParamsProvider")
  }

  return context
}
