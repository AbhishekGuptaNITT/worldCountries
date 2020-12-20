import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    return(
        <div className={classes.header}>
            <h1>{props.brand}</h1>
            <h2>{props.tagline}</h2>
        </div>
    )
}

export default Header