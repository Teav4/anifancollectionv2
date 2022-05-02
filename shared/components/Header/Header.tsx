import React from 'react'
import classes from './Header.module.scss'
import { SearchBox } from './SearchBox'
import { UserProfileBtn } from './UserProfileBtn'
import { UserSettingBtn } from './UserSettingBtn'
import { UserGuideBtn } from './UserGuideBtn'

function Header() {

  return (
    <div className={classes['header']}>
      <SearchBox/>
      <UserSettingBtn/>
      <UserGuideBtn/>
      <UserProfileBtn/>
    </div>
  )
}

export default Header
