import React, { useEffect, useState } from 'react'
import { DrinkData } from '../type_/drink_data'
import { DrinkItem } from './drink_item'
import '../menu.css'
//check the data
//for drinks
type Result = {
    BobaTea: DrinkData[]
    MatchaTea: DrinkData[]
    SlushTea: DrinkData[]
}

const fetchData = async (): Promise<Result> => {
    const response = await fetch('/packages/pages/menu/Data/drinks.json') //not find the json file
    const json = await response.json()

    return json
}

const UsingDrinkData = (search:string) => {
    const [drinks, SetDrinks] = useState<Result>({
        BobaTea: [],
        MatchaTea: [],
        SlushTea: []
    })
    //const [Searching, select_searching] = useState<SweetData | null> (null)

    useEffect(() => {
        fetchData().then(SetDrinks)
    }, [])

    return { drinks:
        {
        BobaTea:drinks.BobaTea.filter(item => item.name.toLowerCase().indexOf(search) != -1),
        MatchaTea:drinks.MatchaTea.filter(item => item.name.toLowerCase().indexOf(search) != -1),
        SlushTea:drinks.SlushTea.filter(item => item.name.toLowerCase().indexOf(search) != -1)
        }, setDrinks: SetDrinks }
}

    export const DrinkList = ({search}:{search:string}) => {
        const {drinks} = UsingDrinkData(search)
        return (
            <>
            <div className='boba'>
                <h2 className='subtitle'>Boba Tea</h2>
                {drinks.BobaTea.map(theDrink => {
                    return <DrinkItem key={theDrink.name} theDrink={theDrink} />
                })}
            </div>
            <div className='matcha'>
                <h2 className='subtitle'>Matcha Tea</h2>
                {drinks.MatchaTea.map(theDrink => {
                    return <DrinkItem key={theDrink.name} theDrink={theDrink} />
                })}
            </div>
            <div className='slush'>
                <h2 className='subtitle'>Slush Tea</h2>
                {drinks.SlushTea.map(theDrink => {
                    return <DrinkItem key={theDrink.name} theDrink={theDrink} />
                })}
            </div>
            </>
        )
    }