'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

const Provider = ({ children, session }) => {

  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default Provider
