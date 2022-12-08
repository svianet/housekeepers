import Iron from '@hapi/iron'
import { parse, serialize } from 'cookie'
import { IAccount } from '../interfaces/account'

export const COOKIE_NAME = 'session_token'

const TOKEN_SECRET = process.env.SESSION_TOKEN_SECRET!

export async function createCookieForSession(user: User, account: IAccount) {
  // Make login session valid for 48 hours
  const maxAge = 60 * 60 * 48

  const expires = new Date()
  expires.setSeconds(expires.getSeconds() + maxAge)

  const sessionData: SessionData = { user, account, expiresAt: expires.toString() }

  const sessionToken = await Iron.seal(sessionData, TOKEN_SECRET, Iron.defaults)

  const cookie = serialize(COOKIE_NAME, sessionToken, {
    maxAge,
    expires,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  })

  return cookie
}

export async function getSessionFromCookie(cookie: string | undefined) {
  const cookies = parse(cookie ?? '')

  const sessionToken = cookies[COOKIE_NAME]

  if (!sessionToken) {
    return undefined
  }

  const sessionData: SessionData = await Iron.unseal(
    sessionToken,
    TOKEN_SECRET,
    Iron.defaults
  )
  //console.log("cookie:", sessionData)
  return sessionData
}

export interface SessionData {
  user: User,
  account?: IAccount,
  expiresAt: string
}

// return from authsignal
export interface User {
  userId: string
  email?: string
  name?: string
}
