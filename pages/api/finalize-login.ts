import { NextApiRequest, NextApiResponse } from 'next'
import { IAccount } from '../../interfaces/account';
import { authsignal, createCookieForSession } from '../../lib'
import { login } from '../../lib/providers/auth';

// This route handles the redirect back from the Authsignal Prebuilt MFA page
export default async function finalizeLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only GET requests since we are handling redirects
  if (req.method !== 'GET') {
    return res.status(405).send({ message: 'Only GET requests allowed' })
  }

  const token = req.query.token as string

  // This step uses your secret key to validate the token returned via the redirect
  // It makes an authenticated call to Authsignal to check if the magic link challenge succeeded
  const { success, user } = await authsignal.validateChallenge({ token })

  if (success) {
    // login in the backend
    let params = {
      userId: user.userId
    }
    const response = await login(params);
    if (response.success) {
      const account: IAccount = response.data;
      if (user) {
        if (account.gender == "M") {
          account.image_url = '/avatar-male.webp';
        } else {
          account.image_url = '/avatar-female.webp';
        }
      }
      const cookie = await createCookieForSession(user, account)
      res.setHeader('Set-Cookie', cookie)  
    } else {
      // @todo login error
    }
  }

  res.redirect('/')
}
