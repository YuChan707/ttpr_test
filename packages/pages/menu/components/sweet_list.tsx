import React, {useEffect, useState} from 'react'
import {SweetData} from '../type_/sweet_data'
import {SweetItem} from './sweet_item'
import '../menu.css'

//rename together
//for sweet
type Result = {
    catShapedSweets : SweetData[]
    MouseShapeSweets : SweetData[]
}

const fetchData = async (): Promise<Result> =>{
    const response = await fetch('/packages/pages/menu/Data/sweet.json') //not find the json file
    const json = await response.json()

    return json
}

const UsingSweetData = (search:string) => {
    const [sweets, SetSweets] = useState<Result>({
        catShapedSweets:[],
        MouseShapeSweets:[]
    })
    //const [Searching, select_searching] = useState<SweetData | null> (null)

    useEffect(() => {
        fetchData().then(SetSweets)
    }, [])

    return {sweets:
        {
            catShapedSweets:sweets.catShapedSweets.filter(item => item.name.toLowerCase().indexOf(search) != -1),
            MouseShapeSweets:sweets.MouseShapeSweets.filter(item => item.name.toLowerCase().indexOf(search) != -1)
        }, setSweets: SetSweets}
}


export const SweetList = ({search}:{search:string}) => {
    const {sweets} = UsingSweetData(search)
    return(
        <>
        <h2 className='subtitle'>Cat Sweet Shape</h2>
        {sweets.catShapedSweets.map(theSweet =>{
            return <SweetItem key={theSweet.name} theSweet={theSweet} /> 
        })}
        <h2 className='subtitle' >Mouse Sweet Shape</h2>
        {sweets.MouseShapeSweets.map(theSweet =>{
            return <SweetItem key={theSweet.name} theSweet={theSweet} /> 
        })}
        </>
    )
}