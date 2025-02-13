import React from 'react'
import { DrinkData} from '../type_/drink_data'
//import {drinkImportData} from '../Data/drinks.json'
import '../../menu/menu.css'

type DrinkItemShow = {
    theDrink: DrinkData
}

export const DrinkItem = ({
    theDrink: theDrink
}: DrinkItemShow) => {
    return  (
        //{drinkImportData.map(
            <li className='item'> {theDrink.name} - $ {theDrink.information.price.toFixed(2)}</li>
    //)}
    )
}