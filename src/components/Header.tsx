import React from 'react'
import style from "./header.module.css"
const Header = () => {
  return <div className={style.header}>
    <div></div>
    <h1>Todo App!</h1>
    <a href='#' className={style.button}>Check Test Results</a>
  </div>
}




export default Header
