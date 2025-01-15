//
import React, { useState } from "react";
import { DrinkList } from "./drink_list";
import { SweetList } from "./sweet_list";
import '../menu.css'

export const Search_Component = () => {
    //useState try
    const [searchItem, searchSet] = useState("")

    const handleInputChange = (item) => {
        const searchTerm = item.target.value;
        searchSet(searchTerm)
    }
    //on change
    //button
    return (
        <div>
            <form>
                <label> What want?</label>
                <br></br>
                <input
                    type="text"
                    value={searchItem}
                    onChange={handleInputChange}
                    placeholder='Search own menu'
                />
            </form>
            <h2 className='title'> DRINKS</h2>
            <DrinkList search={searchItem} />

            <h2 className='title'>SWEETS</h2>
            <SweetList search={searchItem} />
        </div>
    )
}