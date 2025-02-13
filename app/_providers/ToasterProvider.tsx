'use client'

import { FC, PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

// We have to wrap the Toaster with 'use client'
// otherwise will have an error with server component
const ToasterProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Toaster richColors closeButton />
      {children}
    </>
  )
}

export default ToasterProvider
