import { useContext, createContext, PropsWithChildren } from "react"

type Params = Record<string, string>

const ParamsContext = createContext<Params>(undefined as any)

export interface UseParamsProviderProps {
  params: Params
}

export function UseParamsProvider({ children, params }: PropsWithChildren<UseParamsProviderProps>) {
  return <ParamsContext.Provider value={params}>
    {children}
  </ParamsContext.Provider>
}

export function useParams() {
  const context = useContext(ParamsContext)

  if (context === undefined) {
    throw new Error("useParams must be used within a ParamsProvider")
  }

  return context
}
