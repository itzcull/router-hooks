import { createContext } from "react"
import { useParams } from "./use-params"

export interface RouterHooksContextProps {
  location: Location
  params: Record<string, string>
  searchParams: URLSearchParams
  pathname: string
  href: string
}

export function RouterHooksProvider({ children }: PropsWithChildren<RouterHooksContextProps>) {
  return
}
