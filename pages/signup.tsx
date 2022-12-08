import { GetServerSideProps } from 'next'
import { Navbar } from '../components/navbar'
import SignupForm from '../components/signupForm'
import { getSessionFromCookie, User } from '../lib'

interface Props {
  user: User | null
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const session = await getSessionFromCookie(req.headers.cookie)
  console.log("signup", session);
  if (session && new Date(session.expiresAt) > new Date()) {
    return { props: { user: session.user, account: session.account } }
  } else {
    return { props: { user: null, account: null } }
  }
}

const Signup = ({ user }: Props) => {
    return <>
    <Navbar user={user}></Navbar>
    <div className="px-6 py-6">
    <SignupForm user={user}></SignupForm>
    </div>
    </>
}
export default Signup;