import React from 'react'
import {LoginHeader} from './components/login-header-form'
import {LogIn} from './components/logIn'

export const AppLogin = () => {
    return (
        <>
            <header>
                <LoginHeader/>
            </header>
            <div>
                <LogIn/>
            </div>
        </>
    )
}

