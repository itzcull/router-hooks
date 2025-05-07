import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useMemo } from "react"

const SearchParamsContext = createContext<[URLSearchParams, Dispatch<SetStateAction<URLSearchParams>>]>(undefined as any)

export interface UseSearchParamsProviderProps {
  searchParams: URLSearchParams
  setSearchParams: Dispatch<SetStateAction<URLSearchParams>>
}

export function UseSearchParamsProvider({ children, searchParams, setSearchParams }: PropsWithChildren<UseSearchParamsProviderProps>) {
  const value = useMemo(() => [searchParams, setSearchParams] as const, [searchParams, setSearchParams])
  return <SearchParamsContext.Provider value={value}>
    {children}
  </SearchParamsContext.Provider>
}

export function useSearchParams() {
  const context = useContext(SearchParamsContext)

  if (context === undefined) {
    throw new Error("useSearchParams must be used within a SearchParamsProvider")
  }

  return context
}
