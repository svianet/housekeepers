import { GetServerSideProps } from 'next'
import { PersonalInformation, Navbar } from '../components'
import { getSessionFromCookie, User } from '../lib'

interface Props {
  user: User | null
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const session = await getSessionFromCookie(req.headers.cookie)
  console.log("personal information", session);
  if (session && new Date(session.expiresAt) > new Date()) {
    return { props: { user: session.user, account: session.account } }
  } else {
    return { props: { user: null, account: null } }
  }
}

const PersonalInformationPage = ({ user }: Props) => {
    return <>
    <Navbar user={user}></Navbar>
    <div className="px-6 py-6">
      <PersonalInformation user={user}/>
    </div>    
    </>
}
export default PersonalInformationPage;