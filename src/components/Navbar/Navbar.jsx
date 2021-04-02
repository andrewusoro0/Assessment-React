import React from 'react'
import { Toolbar, Button, Tabs, Tab  } from "@material-ui/core";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <main className='appBar'>
          <div className={classes.AppBarStyle}>
            <Toolbar>
            <div className={classes.menuIcon}>
            <MenuRoundedIcon id='MenuRoundedIcon' className={classes.MenuRoundedIcon}/>
            </div>
            <Tabs className="Tabs" >
          <Tab id='Tabs' label="about" className={classes.tab} />
          <Tab id='Tabs' label="gallery" className={classes.tab} />
          <Tab id='Tabs' label="pricing" className={classes.tab} />
          <Tab id='Tabs' label="fqg" className={classes.tab} />
          <Tab id='Tabs' label="benefit" className={classes.tab} />
        </Tabs>

            <div className={classes.grow}/>
            <div className={classes.signIn}>
            <Button variant="outlined" className={classes.buttonIn}> SIGN IN</Button>
            </div>
            <div className={classes.signUp}>
            <Button variant="outlined" className={classes.buttonUp} > SIGN UP</Button>
            </div>
            </Toolbar>
          </div>  
        </main>
    )
}

export default Navbar
