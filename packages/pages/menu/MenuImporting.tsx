import React from 'react'
//check here
import { createRoot } from 'react-dom/client'

//import { App_sweet } from './app_sweet'
//import { App_drink } from './app_drink'
import {Search_Component} from './components/search_container'

//! helpfully to check if there exist, defined or udnerfined
/*const root1 = createRoot(
    document.getElementById('sweet_result')!
)

root1.render(<App_sweet />)

const root2 = createRoot(
    document.getElementById('drink_result')!
)
root2.render(<App_drink />)*/

const rootSearching = document.getElementById('searching')

if(rootSearching){
    const root = createRoot(rootSearching)
    root.render(<Search_Component/>)
}else {
    console.error('Element with class test not found.')
}


