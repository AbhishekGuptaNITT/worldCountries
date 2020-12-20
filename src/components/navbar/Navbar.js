import React from 'react'
import classes from './Navbar.module.css'

const Navbar = (props) => {
    const btns = props.buttons.map(
        (text,ind) => {
            const fun = (text) => props.clicked(text);
            return <button onClick={fun} key={ind}>{text}</button>
        }
    )
    return(
        <div className={classes.nav}>
            {btns}
        </div>
    )
}

export default Navbar