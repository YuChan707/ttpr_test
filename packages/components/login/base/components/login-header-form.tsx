import React from 'react'
import './login.css'

export const LoginHeader = (): any => {//any = unknow type data /anything

    return (
        <>
        <div className='centralize-header'>
            <div className="base_header">
                <div> <p> <strong className="titled"> Meow Tea</strong> 
                <img className="logo" src={"/packages/images/matcha_boba_tea.png"} alt="logo matcha boba tea smiling"/></p>
                </div>
            </div>
            </div>
        </>
    )
}

