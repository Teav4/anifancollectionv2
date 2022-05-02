import React from 'react'
import classes from './UserGuideBtn.module.scss'
import { Button } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'

export function UserGuideBtn() {

  return (
    <div className={classes['user-guide-btn']}>
      <Button>
        <QuestionCircleOutlined />
      </Button>
    </div>
  )
}
