import React from 'react'
import classes from './UserSettingBtn.module.scss'
import { Button } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'

export function UserSettingBtn() {

  return (
    <div className={classes['user-setting-btn']}>
      <Button>
        <MenuUnfoldOutlined/>
      </Button>
    </div>
  )
}
