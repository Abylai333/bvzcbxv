import {makeAutoObservable} from "mobx"

class ProductStore{
    firstName = "Kali02"
    lastName = 'OOOO'
    cart = []
    products=[
        {
            name:'Banana',
            price: 145,
            id: 1,
            img: "/photos/banana.jpg"
        },
        {
            name:'Fork',
            price: 100,
            id: 2,
            img: "/photos/fork.jpg"
        },
        {
            name:'Bread',
            price: 110,
            id: 3
        },
        {
            name:'Milk',
            price: 90,
            id: 4
        },
        {
            name:'Beer',
            price: 300,
            id: 5
        },
        {
            name:'Salt',
            price: 30,
            id: 6
        },
        {
            name:'Juice',
            price: 200,
            id: 8,
            // img: "C:/J4M/J%M/routing-system-v6/src/Data/photos/apple.jpg"
        },
        {
            name:'Grapes',
            price: 120,
            id: 9,
            // img: "C:/J4M/J%M/routing-system-v6/src/Data/photos/apple.jpg"
        },
        {
            name:'Spoon',
            price: 75,
            id: 10,
            // img: "C:/J4M/J%M/routing-system-v6/src/Data/photos/apple.jpg"
        },
        {
            name:'Meat',
            price: 250,
            id: 11,
            // img: "C:/J4M/J%M/routing-system-v6/src/Data/photos/apple.jpg"
        },
        {
            name:'Fried Chicken',
            price: 350,
            id: 12,
            // img: "C:/J4M/J%M/routing-system-v6/src/Data/photos/apple.jpg"
        },
        {
            name:'Apple',
            price: 135,
            id: 13,
            img: "/photos/apple.jpg"
        }
    ]

    constructor(){
        makeAutoObservable(this)
    }

    get showName(){return this.lastName + " " + this.firstName}


    setProducts(products){
        this.products = products
    }
    
    setLastName(va){
        this.lastName = va
    }

    AddToCart(item){
        this.cart.push(item)
    }
}

export default new ProductStore()


