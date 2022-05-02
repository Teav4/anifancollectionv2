import React from 'react'
import classes from './UserProfileBtn.module.scss'
import { Avatar } from 'antd'

export function UserProfileBtn() {

  return (
    <div className={classes['user-profile-btn']}>
      <Avatar size={36} src="https://avatars.githubusercontent.com/u/38209312"></Avatar>
    </div>
  )
}
