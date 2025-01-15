//
import React, { useState } from "react";
import { DrinkList } from "./drink_list";
import { SweetList } from "./sweet_list";
import '../menu.css'

export const Search_Component = () => {
    //useState try
    const [searchItem, searchSet] = useState("")
    const lookingItem = (item) => {
        const searchTerm = item.target.value
        searchSet(searchTerm)
    }
    //.toLowerCase()
    //on change
    //button
    return (
        <div className='design-form'>
            <form>
                <label className="label-menu"> 🍬 What do you want?</label>
                <br></br>
                <input
                    className = "input-item"
                    type="text"
                    value={searchItem}
                    onChange={lookingItem}
                    placeholder='Search own menu'
                />
            </form>
            <h2 className='title'> DRINKS</h2>
            <DrinkList search={searchItem.toLowerCase()} />

            <h2 className='title'>SWEETS</h2>
            <SweetList search={searchItem.toLowerCase()} />
        </div>
    )
}