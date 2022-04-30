import React from 'react'
import classes from './index.module.scss'
import { AuthContext } from 'modules/auth'

function PostIndex() {

  const authStatus = React.useContext(AuthContext)

  return (
    <div className={classes['main-post']}>
      Hello Post. {authStatus.status}
    </div>
  )
}

export default PostIndex
