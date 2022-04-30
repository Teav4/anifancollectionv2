import React from 'react'
import classes from './SideBar.module.scss'

type Props = {
  isOpen: boolean,
}

function SideBar({ isOpen }: Props) {

  return (
    <div className={classes['sidebar']}>
      { isOpen && <div>Sidebar</div> }
    </div>
  )
}

export default SideBar
