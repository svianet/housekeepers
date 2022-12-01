import { GetServerSideProps } from 'next'
import { Login, Navbar } from '../components'
import { IAccount } from '../interfaces/account'
import { getSessionFromCookie, User } from '../lib'

interface Props {
  user: User | null,
  account?: IAccount | null
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const session = await getSessionFromCookie(req.headers.cookie)
  console.log("login", session);
  if (session && new Date(session.expiresAt) > new Date()) {
    return { props: { user: session.user, account: session.account } }
  } else {
    return { props: { user: null, account: null } }
  }
}

const LoginPage = ({ user }: Props) => {
    return <>
    <Navbar user={user}></Navbar>
    <Login />
    </>
}
export default LoginPage;