import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './packages/components/header/header-app.tsx'
import {ForAppMP} from './packages/pages/MainPage/TogetherMainPage.tsx'
const rootElement = document.querySelector('.test')

if (rootElement) {
    const root = createRoot(rootElement)
    //root.render(<App />)
    root.render(<ForAppMP/>)
    
} else {
    console.error('Element with class test not found.')
}