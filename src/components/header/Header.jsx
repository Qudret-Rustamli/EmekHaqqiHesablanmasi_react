import React from 'react'
import AppBar from '@mui/material/AppBar';
import style from './Header.module.css'

const Header = () => {
  return (
    <AppBar>
        <div className={style.header}>
        Əmək haqqının hesablanması
        </div>
    </AppBar>
  )
}

export default Header