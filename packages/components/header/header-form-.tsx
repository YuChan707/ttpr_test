import React from 'react'
import './new_header.css'
import IconButton from '@mui/material/IconButton';
/*
                <IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>*/
export const Header = (): any => {//any = unknow type data /anything
    const username = ' ';
    return (
        <>
            <div className="top">
                <div> <p> <strong className="titled"> Meow Tea</strong> 
                <img className="logo" src={"/packages/images/matcha_boba_tea.png"} alt="logo matcha boba tea smiling"/>
                </p></div>

                <div className="login"> 

                <a href="/packages/components/login/base_login.html">login</a> </div>
            </div>
            {/*<div className='name-header'> Welcome {username} </div>*/}
            <div className="header">

                <a className="buttonHeader" href="index.html">Home</a> 
                <span> </span><a className="buttonHeader" href="/packages/pages/menu/menu.html">Menu</a>
                <span> </span><a className="buttonHeader" href="/packages/pages/vision/vision.html">Vision</a>
            </div>
        </>
    )
}

