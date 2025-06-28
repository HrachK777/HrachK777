
import { getServerSession } from 'next-auth'
// import { authOptions } from '../api/auth/[...nextauth]/route'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function auth() {
  const session = await getServerSession(authOptions);

  return session;
}