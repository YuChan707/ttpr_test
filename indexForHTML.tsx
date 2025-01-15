import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './packages/components/header/header-app.tsx'

const rootElement = document.querySelector('.test')

if (rootElement) {
    const root = createRoot(rootElement)
    root.render(<App />)
    
} else {
    console.error('Element with class test not found.')
}