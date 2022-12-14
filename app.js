const wrapper = document.querySelector(".sliderwrapper")
const menuitems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title : "Nike Ambush Air Adjust Force",
        description : "Yoon Ahn hits refresh on the clandestine hoops shoe you've longed to see back on the streets. From luxurious nubuck leather to plastic details, the Ambush branded shoe bridges iconic b-ball style with runway flair. And of course, we've kept the removable midfoot strap that made this look legendary.",
        price  : "₹27,250",
        colors: [
            {
                code : "White",
                img: "./img/air1.png",
            },
            {
                code : "Black",
                img: "./img/air2.png",
            },  
        ],
    },
    {
        id: 2,
        title : "Air Jordan 6 Retro",
        description : "MJ's sixth signature shoe debuted during the 1990–1991 season as His Airness battled rivals in pursuit of an elusive first championship.Now, it's back in a variety of colour schemes.Gear up for the 30th anniversary of the Air Jordan 6 with this timeless classic.",
        price : "₹18,395",
        colors: [
            {
                code : "grey",
                img : "./img/jordan1.png"
            },
            {
                code : "red",
                img : "./img/jordan2.png"
            },
        ],
    },
    
    {
        id: 3,
        title : "Nike Blazer Mid X Sacai Black Grey",
        description : "Wolf grey leather Sacai x Nike Blazer Mid high-top sneakers from Nike featuring a round toe, a flat rubber sole, a lace fastening and a pull tab at the rear. Supplied by a premier sneaker marketplace dealing with unworn, already sold out, in demand rarities. Each product is rigorously inspected by experienced experts guaranteeing authenticity.",
        price : "₹40,000",
        colors: [
            {
                code : "Black",
                img : "./img/blazer1.png"
            },

            {
                code : "whitesmoke",
                img : "./img/blazer1.png"

            }
        ],
    },

    {
        id: 4,
        title : "Nike Crater Impact Running Shoes",
        description : "Nike Crater Impact is part of our sustainability journey to transform trash into shoes that tread a little lighter. Made from at least 25% recycled material by weight, it brings in unique design choices that reduce waste when compared with traditional methods—like an embroidered Swoosh logo, efficient overlays and of course its Crater Foam midsole.",
        price : "₹8,295",
        colors: [
            {
                code : "Olive",
                img : "./img/crater.png"
            },
            {
                code : "Pink",
                img : "./img/crater2.png"
            },
        ],
    },

    {
        id: 5,
        title : "SPACE HIPPIE 04",
        description : "Space Hippie is a story of trash transformed. From the label to the outsole, these visionary running shoes are made from at least 20% recycled materials by weight. Not only is the 04 the most lightweight silhouette in the collection, its colourful “Space Waste Yarn” upper, made from recycled plastic bottles, t-shirts and yarn scraps, includes approximately 80% recycled content by weight. ",
        price : "₹12,995",
        colors: [
            {
                code : "White",
                img : "./img/hippie.png"
            },
            {
                code : "#9CFF2E",
                img : "./img/hippie2.png"
            },
        ],
    },
]

let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductDesc = document.querySelector(".productDesc")
const currentProductColor = document.querySelectorAll(".color")
const currentProductSize = document.querySelectorAll(".size")

menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)` 

        //change the choosen product 
        choosenProduct = products[index]

        //change texts of products
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price;
        currentProductDesc.textContent = choosenProduct.description;
        currentProductImg.src = choosenProduct.colors[0].img

        //assigning new colors
        currentProductColor.forEach((color,index) =>{
             color.style.backgroundColor= choosenProduct.colors[index].code;
        })
    })
})

currentProductColor.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSize.forEach((size) =>{
    size.addEventListener("click", ()=>{
        currentProductSize.forEach((size=>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        }))
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", () =>{
    payment.style.display = "flex"
})


close.addEventListener("click", () =>{
    payment.style.display = "none"
})

