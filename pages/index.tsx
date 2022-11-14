import { GetServerSideProps } from 'next'
import { Dashboard, Login } from '../components'
import { Navbar } from '../components/navbar'
import { getSessionFromCookie, User } from '../lib'

interface Props {
  user: User | null
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const session = await getSessionFromCookie(req.headers.cookie)
  if (session && new Date(session.expiresAt) > new Date()) {
    return { props: { user: session.user } }
  } else {
    return { props: { user: null } }
  }
}

export default function HomePage({ user }: Props) {
  console.log("HomePage", user)
  // return <><Navbar user={user}></Navbar>
  // {user ? <Dashboard user={user} /> : <Login />}</>
  return <>
    <Navbar user={user}></Navbar>
    <Dashboard user={user}/>
  </>
}
