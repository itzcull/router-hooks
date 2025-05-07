'use client'

import { PropsWithChildren } from "react"
import { RouterHooksContextProps, RouterHookProvider } from "../context"


export function RemixProvider({ children }: PropsWithChildren<unknown>) {
  return <RouterHookProvider>

  </RouterHookProvider>
}
