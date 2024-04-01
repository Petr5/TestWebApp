import pizzaImg from '../images/pizza.png'
import burgerImg from '../images/burger.png'
import cocaImg from '../images/coca.png'
import saladImg from '../images/salad.png'
import waterImg from '../images/water.png'
import iceCreamImg from '../images/icecream.png'
import kebabImg from '../images/kebab.png'

export function getData(){
    return [
        {tilte: "Pizza", price: 17.99, Image: pizzaImg, id: 1},
        {tilte: "Burger", price: 15, Image: burgerImg, id: 2},
        {tilte: "Coca", price: 3.5, Image: cocaImg, id: 3},
        {tilte: "Kebab", price: 13.99, Image: kebabImg, id: 4},
        {tilte: "Salad", price: 2.5, Image: saladImg, id: 5},
        {tilte: "Bottle of water", price: 0.99, Image: waterImg, id: 6},
        {tilte: "Ice cream", price: 2.99, Image: iceCreamImg, id: 7},
    ];
}