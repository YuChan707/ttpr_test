/*import DrinkData from './drinks.json';
//object
import SweetData from './sweet.json';


const a_DRINK= (a_drink: typeof DrinkData['bobaDrinks'][number]) =>{
    return `
    <li>${a_drink.name} - $${a_drink.price.toFixed(2)}</li>
    ` //templeate string

}
const DRINKS = (drinks: typeof DrinkData['bobaDrinks']) => {
    return `
    <ul>
        ${drinks.map( a_drink => a_DRINK(a_drink) ).join('')}
    </ul>
    `
}

//displaying the data
const display_drink = (drinks: typeof DrinkData, query: string = '') => {
    document.getElementById('drink_result')!.innerHTML = DRINKS(drinks.bobaDrinks.filter(a_drink => {
        return a_drink.name.toLocaleLowerCase().includes(query.toLowerCase())
    }));
    //check array topic
}

document.getElementById('search-form')?.addEventListener('submit', (event)=>{
    const query = (document.getElementById('search-input') as HTMLInputElement).value
    display_drink(DrinkData, query)
})

document.getElementById('search-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
})

document.getElementById('drink_result')?.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLLIElement)) return
    (event.target as HTMLLIElement).classList.toggle('selected')
})

display_drink(DrinkData)
*/