import React from 'react';
import Logo from '../../Logo/Logo'

import classes from './Toolbar.css';
const toolbar=(porps)=>(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo></Logo>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;