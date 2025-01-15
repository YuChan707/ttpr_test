export type SweetData = {
    name:string
    information:{
        id_sweet:number
        name:string
        type:string
        price: number
        calories: number
        ingredients: string[]
        isNew: boolean
    }
}