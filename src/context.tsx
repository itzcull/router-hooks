import { createContext, PropsWithChildren, useMemo } from "react";
import { useSearchParams, UseSearchParamsProvider } from "./use-search-params";
import { useParams, UseParamsProvider } from "./use-params";
import { useLocation, UseLocationProvider } from "./use-location";
import { useResolvedPath, UseResolvedPathProvider } from "./use-resolved-path";
import { useHref, UseHrefProvider } from "./use-href";
import { useNavigate, UseNavigateProvider } from "./use-navigate";

export interface RouterHooksContextProps {
  useLocation: ReturnType<typeof useLocation>;
  useParams: ReturnType<typeof useParams>;
  useSearchParams: ReturnType<typeof useSearchParams>;
  useResolvedPath: ReturnType<typeof useResolvedPath>;
  useHref: ReturnType<typeof useHref>;
  useNavigate: ReturnType<typeof useNavigate>;
}

export const RouterHooksContext = createContext<RouterHooksContextProps>(
  undefined as any
);

export function RouterHookProvider({
  children,
  useLocation,
  useParams,
  useSearchParams,
  useResolvedPath,
  useHref,
  useNavigate,
}: PropsWithChildren<RouterHooksContextProps>) {
  const value = useMemo<RouterHooksContextProps>(
    () => ({
      useLocation,
      useParams,
      useSearchParams,
      useResolvedPath,
      useHref,
      useNavigate,
    }),
    []
  );

  return (
    <UseLocationProvider location={undefined}>
      <UseParamsProvider params={undefined}>
        <UseSearchParamsProvider searchParams={undefined}>
          <UseResolvedPathProvider path={undefined}>
            <UseHrefProvider href={undefined}>
              <UseNavigateProvider navigate={undefined}>
                {children}
              </UseNavigateProvider>
            </UseHrefProvider>
          </UseResolvedPathProvider>
        </UseSearchParamsProvider>
      </UseParamsProvider>
    </UseLocationProvider>
  );
}
