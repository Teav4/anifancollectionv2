import React from 'react'
import classes from './SearchBox.module.scss'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export function SearchBox() {

  return (
    <Input className={classes['search-box']} placeholder="Search" prefix={<SearchOutlined />} />
  )
}
