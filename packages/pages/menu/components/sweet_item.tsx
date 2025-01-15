import React from 'react'
import { SweetData} from '../type_/sweet_data'
import '../menu.css'
type SweetItemShow = {
    theSweet: SweetData
}

export const SweetItem = ({
    theSweet: theSweet
}: SweetItemShow) => {
    return  (
        <li className='item'> {theSweet.name} - $ {theSweet.information.price.toFixed(2)}</li>
    )
}