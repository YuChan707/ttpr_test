import React from 'react'
//check here
import { createRoot } from 'react-dom/client'

import { App } from './login/having-account/login-index.tsx'
//! helpfully to check if there exist, defined or udnerfined
const root = createRoot(
    document.getElementById('body_login')!
)

root.render(<App />)

