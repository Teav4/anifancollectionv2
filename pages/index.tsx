import * as React from 'react';
import { useAuth } from '../modules/auth';
import Post from './post'

export default function Homepage(): React.ReactElement {
  const authStatus = useAuth();
  console.log(authStatus)

  return <>{authStatus.status === 'loggedIn' ? <Post /> : <div>Not Logged In</div>}</>;
}
