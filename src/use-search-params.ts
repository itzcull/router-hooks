import { createContext, Dispatch, SetStateAction, useContext } from "react"

const SearchParamsContext = createContext<[URLSearchParams, Dispatch<SetStateAction<URLSearchParams>>]>(undefined as any)

export function useSearchParams() {
  const context = useContext(SearchParamsContext)

  if (context === undefined) {
    throw new Error("useSearchParams must be used within a SearchParamsProvider")
  }

  return context
}
