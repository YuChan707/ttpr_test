import React from 'react'
import './new_header.css'


export const Header = (): any => {//any = unknow type data /anything
    const username = 'Anna';
    return (
        <>
            <div className="top">
                <div> <p> <strong className="titled"> Meow Tea</strong> </p>
                </div>
                <div className="login"> <a href="./login/having-account/login.html">login</a> </div>
            </div>
            <div> Welcome {username} </div>
            <div className="header">
                <a href="index.html">Home</a>
                <a href="/packages/pages/menu/menu.html">Menu</a>
                <a href="/packages/pages/vision/vision.html">Vision</a>
            </div>
        </>
    )
}

