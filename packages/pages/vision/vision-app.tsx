import React from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from '../../components/header/header-form-'

const rootElement = document.querySelector('.here')

if (rootElement) {
    const root = createRoot(rootElement)
    root.render(<Header />)
    
} else {
    console.error('Element with class test not found.')
}