import React from 'react'
import classes from './MainLayout.module.scss'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'

type Props = { children: React.ReactNode }

function MainLayout({ children }: Props) {

  return (
    <>
      <main className={classes['main-layout']}>
        <Header />
        <SideBar isOpen={true}/>

        <div className={classes['ani-container']}>
          {children}
        </div>
        
      </main>
    </>
  )
}

export default MainLayout
