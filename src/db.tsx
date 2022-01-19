import book1 from "../src/assets/images/cover1.png";
import book2 from "../src/assets/images/cover2.png";
import book3 from "../src/assets/images/cover3.png";
import book4 from "../src/assets/images/cover4.png";
import book5 from "../src/assets/images/cover5.png";
import book6 from "../src/assets/images/cover6.png";
import book7 from "../src/assets/images/cover7.png";
import book8 from "../src/assets/images/cover8.png";
import book9 from "../src/assets/images/cover9.png";
import book10 from "../src/assets/images/cover10.png";
import book11 from "../src/assets/images/cover11.png";

let currentlyReading : {
    cover:string
    title:string
    author:string
    time:number
    people?:number
    button?:string
}[]

currentlyReading = [
    {
        cover:book1,
        title:"Bring Your Human To Work",
        author:"Erica Keswin",
        time:13,
    },
    {
        cover:book2,
        title:"Employee to Entrepreneur",
        author:"Steve Glaveski",
        time:15,
    },
    {
        cover:book3,
        title:"Doesn't Hurt to Ask",
        author:"Trey Gowdy",
        time:13,
        people:1.9,
    },
    {
        cover:book4,
        title:"The Fate of Food",
        author:"Amanda Little",
        time:12,
        people:16,
    },
    {
        cover:book5,
        title:"Lives of the Stoics",
        author:"Ryan Holiday, Stephen Hansel",
        time:13,
    },
    {
        cover:book11,
        title:"Beyond Entrepreneurship",
        author:"Jim Collins & Bill Lazier",
        time:14,
        people:1.9,
    },
    {
        cover:book6,
        title:"Loving Your Business",
        author:"Debbie King",
        time:12,
    },
    {
        cover:book7,
        title:"The Lonely Century",
        author:"Noreena Hertz",
        time:15,
    },
    {
        cover:book8,
        title:"Eat Better, Feel Better",
        author:"Giada De Laurentiis",
        time:13,
        people:1.9,
    },
    // {
    //     cover:book9,
    //     title:"Dropshipping",
    //     author:"James Moore",
    //     time:12,
    // },
]


let finishedReading : {
    cover:string
    title:string
    author:string
    time:number
    people?:number
    button?:string
}[]

finishedReading = [
    // {
    //     cover:book10,
    //     title:"Being Boss",
    //     author:"Kathleen Shanon and Emily...",
    //     time:13,
    //     people:1.2,
    //     button:"Read again"
    // }
]

let trendingBlinks : {
    cover:string
    title:string
    author:string
    time:number
    people?:number
    button?:string
}[]

trendingBlinks = [
    {
        cover:book10,
        title:"Being Boss",
        author:"Kathleen Shanon and Emily...",
        time:13,
        people:1.2,
        button:"add"
    },
    {
        cover:book11,
        title:"Beyond Entrepreneurship",
        author:"Jim Collins & Bill Lazier",
        time:14,
        people:1.9,
        button:"add"
    },
    { 
        cover:book2,    
        title:"Employee to Entrepreneur",
        author:"Steve Glaveski",
        time:14,
        people:1.9,
        button:"add"
    },
    {
        cover:book4,
        title:"The Fate of Food",
        author:"Amanda Little",
        time:12,
        people:16,
    },
    {
        cover:book5,
        title:"Lives of the Stoics",
        author:"Ryan Holiday, Stephen Hansel",
        time:13,
        button:"add"
    },
    {
        cover:book6,
        title:"Loving Your Business",
        author:"Debbie King",
        time:13,
    },
]

let justAddedBlinks : {
    cover:string
    title:string
    author:string
    time:number
    people?:number
    button?:string
}[]

justAddedBlinks = [
    {
        cover:book7,
        title:"The Lonely Century",
        author:"Noreena Hertz",
        time:15,
        button:"add"
    },
    {
        cover:book8,
        title:"Eat Better, Feel Better",
        author:"Giada De Laurentiis",
        time:13,
        people:1.9,
        button:"add"
    },
    {
        cover:book9,
        title:"Dropshipping",
        author:"James Moore",
        time:12,
        button:"add"
    }
]

let audioBlinks : {
    cover:string
    title:string
    author:string
    time:number
    people?:number
    button?:string
}[]

audioBlinks = [
    {
        cover:book1,
        title:"Bring Your Human To Work",
        author:"Erica Keswin",
        time:13,
        button:"add"
    },
    {
        cover:book11,
        title:"Beyond Entrepreneurship",
        author:"Jim Collins & Bill Lazier",
        time:15,
        button:"add"
    },
    {
        cover:book3,
        title:"Doesn't Hurt to Ask",
        author:"Trey Gowdy",
        time:13,
        people:1.9,
        button:"add"
    },
]

export {currentlyReading, finishedReading, trendingBlinks, justAddedBlinks , audioBlinks};