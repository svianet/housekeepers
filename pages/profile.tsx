import React from 'react'
import { GetServerSideProps } from 'next'
import { Profile, Navbar } from '../components'
import { getSessionFromCookie, User } from '../lib'
import { IAccount } from '../interfaces/account';
import { getProfile } from '../lib/providers/person';
import { IProfile } from '../interfaces/profile';

interface Props {
  user: User | null,
  account?: IAccount | null,
  profile?: IProfile | null
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
}) => {
  const session = await getSessionFromCookie(req.headers.cookie)
  if (session && new Date(session.expiresAt) > new Date()) {
    let params = { userId: session.user.userId }
    const response = await getProfile(params);
    const profile: IProfile = response.success ? response.data : null;
    console.log("profile page", profile);
    return { props: { user: session.user, account: session.account, profile: profile } }
  } else {
    return { props: { user: null } }
  }
}

const ProfilePage = ({ user, account, profile }: Props) => {
    return <>
    <Navbar user={user} account={account}></Navbar>
    <div className="px-6 py-6">
    <Profile user={user} profile={profile} />
    </div>    
    </>
}
export default ProfilePage;