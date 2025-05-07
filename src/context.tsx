import { createContext, PropsWithChildren, useMemo } from "react"
import { useSearchParams } from "./use-search-params"
import { useParams } from "./use-params"
import { useLocation } from "./use-location"
import { useResolvedPath } from "./use-resolved-path"
import { useHref } from "./use-href"
import { useNavigate } from "./use-navigate"

export interface RouterHooksContextProps {
  useLocation: ReturnType<typeof useLocation>
  useParams: ReturnType<typeof useParams>
  useSearchParams: ReturnType<typeof useSearchParams>
  useResolvedPath: ReturnType<typeof useResolvedPath>
  useHref: ReturnType<typeof useHref>
  useNavigate: ReturnType<typeof useNavigate>
}

export const RouterHooksContext = createContext<RouterHooksContextProps>(undefined as any)

export function RouterHookProvider({ children, useLocation, useParams, useSearchParams, useResolvedPath, useHref, useNavigate }: PropsWithChildren<RouterHooksContextProps>) {
  const value = useMemo<RouterHooksContextProps>(() => ({
    useLocation,
    useParams,
    useSearchParams,
    useResolvedPath,
    useHref,
    useNavigate,
  }), [])

  return <RouterHooksContext.Provider value={value}>
    {children}
  </RouterHooksContext.Provider>
}