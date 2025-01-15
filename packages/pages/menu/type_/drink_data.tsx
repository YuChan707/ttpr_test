export type DrinkData = {
    type_drink:string
    name: string
    information: {
        price: number
        calories: number
        ingredients: string[]
        isNew: boolean
        temperature: string
    }
}