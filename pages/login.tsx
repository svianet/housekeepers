import { GetServerSideProps } from 'next'
import { Login, Navbar } from '../components'
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

const LoginPage = ({ user }: Props) => {
    return <>
    <Navbar user={user}></Navbar>
    <Login />
    </>
}
export default LoginPage;