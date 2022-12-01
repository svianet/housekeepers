import { GetServerSideProps } from 'next'
import { Dashboard } from '../components'
import { Navbar } from '../components/navbar'
import { IAccount } from '../interfaces/account'
import { ISearch } from '../interfaces/search'
import { getSessionFromCookie, User } from '../lib'
import { searchProfessionals } from '../lib/providers/search'

interface Props {
  user: User | null,
  account?: IAccount | null,
  providers?: ISearch | null
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  console.log("index")
  const session = await getSessionFromCookie(req.headers.cookie)
  if (session && new Date(session.expiresAt) > new Date()) {
    let params = { userId: session.user.userId }
    const response = await searchProfessionals(params);
    const providers: ISearch = response.success ? response.data : null;
    console.log("contactlist", providers);
    return { props: { user: session.user, account: session.account, providers: providers } }
  } else {
    return { props: { user: null, account: null } }
  }
}

export default function HomePage({ user, account, providers }: Props) {
  console.log("HomePage", user, account)
  // return <><Navbar user={user}></Navbar>
  // {user ? <Dashboard user={user} /> : <Login />}</>
  return <>
    <Navbar user={user} account={account}></Navbar>
    <Dashboard user={user} providers={providers}/>
  </>
}
