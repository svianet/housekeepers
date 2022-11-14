import { GetServerSideProps } from 'next'
import { AboutList } from '../components'
import { Navbar } from '../components/navbar'
import { getSessionFromCookie, User } from '../lib'
import styles from '../styles/about.module.css'

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

const About = ({ user }: Props) => {
    return <>
    <Navbar user={user}></Navbar>
    <AboutList></AboutList>
    </>
}
export default About;